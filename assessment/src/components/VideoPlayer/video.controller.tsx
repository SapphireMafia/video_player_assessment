import React, { useRef, useState, useEffect } from 'react'
import
MediaControls, { PLAYER_STATES }
    from 'react-native-media-controls';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import VideoManager, {
    VideoInfoType,
} from '@salihgun/react-native-video-processor';
const VideoController = () => {
    const videoPlayerRef = useRef<Video>(null);
    const flatlistRef = useRef(null)
    const [videoInfo, setVideoInfo] = React.useState<VideoInfoType>({
        duration: 0,
        creationDate: '',
        size: 0,
        width: 0,
        height: 0,
        bit_rate: 0,
        codec_name: '',
        codec_type: '',
        sample_aspect_ratio: '',
        frame_rate: '',
    });

    const [videoPath, setVideoPath] = React.useState<string>('');
    const [framesPath, setFramesPath] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);

    const onPickVideo = async () => {
        const video = (await ImagePicker.openPicker({
            mediaType: 'video',
            multiple: true,
        })) as ImageOrVideo[];

        setLoading(true);

        const framePath = await VideoManager.createFrames(
            video[0]?.path as string,
            1
        );

        const videoInfoResponse = await VideoManager.getVideoInfo(
            video[0]?.path as string
        );
        setVideoInfo(videoInfoResponse);
        setFramesPath(framePath);
        setVideoPath(video[0]?.path);
        setLoading(false);
    };

    const [currentTime, setCurrentTime] = useState(0);
    const [vidIndex, setIndex] = useState(0)
    const multiplicity = 0.5
    const arrayLength = 500
    const maximumValue = Math.round(videoInfo.duration)
    const itemAmountPerScreen = 10;
    const [isScrolling, setIsScrolling] = useState(false);


    const generateArrayBlock = () => {
        let length = arrayLength;
    
        if (maximumValue) {
          const blockDivision = 10;
          
          length = Math.ceil(maximumValue / blockDivision) + itemAmountPerScreen;
        }
    
        return new Array(length).fill(0);
      }

    const [oneItemWidth, setOneItemsWidth] = useState(0)
    const onProgress = (data) => {
        const itemData = generateArrayBlock()
        const index = Math.floor(currentTime * 5);

        if (index >= 0 && index < itemData.length) {
            setCurrentTime(data.currentTime);
            setIndex(index)
        }
    };

    const onLayout = (event) => {
        setOneItemsWidth(Math.round(
            event.nativeEvent.layout.width / itemAmountPerScreen
          ))
    }

    const onFlatListScroll = (event) => {
      
        let newValue =    (event.nativeEvent.contentOffset.x / oneItemWidth) * multiplicity;
       
        const setValue = parseFloat(
            parseFloat(newValue.toString()).toFixed(2)
          );
        seekToIndex(setValue)
    };

    const seekToIndex = (index) => {
        if (videoPlayerRef.current) {
            videoPlayerRef.current.seek(index);
            
        }
    };


    return {
        flatlistRef,
        videoPlayerRef,
        videoPath,
        videoInfo,
        framesPath,
        loading,
        vidIndex,
        onProgress,
        onPickVideo,
        generateArrayBlock,
        onFlatListScroll,
        setIsScrolling,
        onLayout
    }
}

export default VideoController

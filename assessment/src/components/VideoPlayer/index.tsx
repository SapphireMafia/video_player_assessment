import {
  View,
  Text,
  Pressable,
  Image,
  Modal,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import React, { useState } from 'react'
import Video from 'react-native-video';
import VideoController from './video.controller';
import styles from './video.styles';
import { IMAGE_UPLOAD,PLAYBTN } from '../../asset/images';
import { LABEL } from './video.constant';
const CustomVideoPlayer = () => {

  const {
    flatlistRef,
    videoPlayerRef,
    videoPath,
    framesPath,
    loading,
    onProgress,
    onPickVideo,
    generateArrayBlock,
    vidIndex,
    onFlatListScroll,
    onLayout
  } = VideoController()


  const [paused, setPaused] = useState(false)

  return (
    <View style={styles.container}>
    {framesPath ? 
    (<>
      <Pressable
        onPress={() => setPaused(!paused)}
      >
        <Video
          ref={videoPlayerRef}
          source={{
            uri: videoPath,
          }}
          style={[styles.videoContainer]}
          paused={paused}
          controls={false}
          playInBackground={false}
          resizeMode={'contain'}
          onProgress={onProgress}
        />
        {paused &&
          <View style={[styles.videoContainer, { backgroundColor: 'rgba(0, 0, 0,0.75)', position: 'absolute', justifyContent: 'center' }]}>
            <View style={styles.pauseContainer}>
              <Image source={PLAYBTN} style={{
                height:60,
                width:60
              }}/>
            </View>
          </View>
        }
      </Pressable>
      <View
        style={{ flex: 1 }}
        onLayout={onLayout}
      >
        {framesPath &&
          <FlatList
            ref={flatlistRef}
            style={[
              styles.flatlistContainer
            ]}
            scrollEnabled={true}
            data={generateArrayBlock()}
            keyboardShouldPersistTaps="always"
            horizontal
            keyExtractor={(_, index) => index.toString()}
            onScroll={onFlatListScroll}
            renderItem={({ item, index }) => <>
            {vidIndex === index && <View style={styles.marker} />}
              <Image
                key={index}
                style={styles.frame}
                source={{ uri: `${framesPath}${index + 1}.jpg` }}
              />
            </>}
            showsHorizontalScrollIndicator={false}
          />

        }
      </View>
    </>) : 
    <>
    <Image 
    source={IMAGE_UPLOAD}
    style={{marginBottom:20, height:340, width:'auto'}}
    />
    </>
    }
      <Pressable style={styles.buttonContainer} onPress={onPickVideo}>
        <Text style={styles.label}>{LABEL.CHOOSE_VIDEO}</Text>
      </Pressable>

      <Modal transparent visible={loading}>
        <View style={styles.modal}>
          <ActivityIndicator size={50} />
          <Text style={{color:'white'}}>{LABEL.UPLOAD_VIDEO}</Text>
        </View>
      </Modal>
    </View>

  )
}

export default CustomVideoPlayer

import {  View } from 'react-native'
import CustomVideoPlayer from '../../../components/VideoPlayer'
import styles from './index.style'

const UI_EXAM = () => {
  return (
    <View style={styles.container}>
      <CustomVideoPlayer />
    </View>
  )
}
export default UI_EXAM
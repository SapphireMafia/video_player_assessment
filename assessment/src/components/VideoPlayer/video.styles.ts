import {StyleSheet, Dimensions, Platform} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  marker: {
    left: 0,
    top: 0,
    borderWidth: 2,
    position: 'absolute',
    width: 40,
    borderColor: 'black',
    height: 200,
    backgroundColor: 'rgba(240, 240, 240,0.50)',
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    color: 'black',
    marginBottom: 5,
  },
  thumbnail: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {paddingHorizontal: 20, paddingVertical: 10},
  video: {
    width: 200,
    height: 200,
    backgroundColor: 'black',
    marginTop: 20,
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  scrollContainer: {
    paddingTop: 100,
    alignItems: 'center',
    paddingBottom: 100,
  },
  frame: {
    width: 40,
    height: 200,
  },
  framesScrollContainer: {paddingTop: 20},
  videoContainer: {
    width: width,
    height: height * 0.5,
    zIndex: 99,
  },
  flatlistStyle: {
    width: width,
    paddingLeft: width / 2 - 20,
    backgroundColor: 'gray',
  },
  mainContainerStyle: {
    height: Platform.select({
      ios: width / 6,
      android: width / 6.5,
    }),
  },
  flatlistContainer: {
    flex: 1,
  },
  pauseContainer: {justifyContent: 'center', alignItems: 'center'},
  label: {
    color: '#ffff',
    fontWeight: 'bold',
  },
});

export default styles;

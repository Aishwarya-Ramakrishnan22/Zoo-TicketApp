import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const style = StyleSheet.create({
  input: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: screenHeight / 3,
    // shadowOffset: {width: 1, height: 1},
    // elevation: 5,

    borderRadius: 6,
  },
  texts: {
    fontWeight: 'bold',
    color: '#F1A661',
    fontSize: 26,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    // fontStyle: 'italic',
  },
  textview: {
    borderRadius: 10,
    // backgroundColor: '#F1A661',
    width: '30%',
    height: 35,
  },
  but: {
    color: '#F1A661',
    alignContent: 'space-between',
    alignItems: 'stretch',
  },
});

export default style;

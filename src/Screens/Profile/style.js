import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const style = StyleSheet.create({
  container: {
    backgroundColor: '#F1A661',
    width: '100%',
    marginVertical: 20,
    padding: 15,
    elevation: 15,
    shadowOffset: 10,
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
  },
  button: {
    width: '100%',
    marginVertical: 20,
    padding: 15,
    elevation: 15,
    shadowOffset: 10,
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default style;

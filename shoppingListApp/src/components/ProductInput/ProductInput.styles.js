import {Dimensions, StyleSheet} from 'react-native';

const device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    height: device.height * 1/3,
  },
  input_container: {
    padding: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: 'black',
  },
  input_title: {
    fontSize: 12,
  },
});

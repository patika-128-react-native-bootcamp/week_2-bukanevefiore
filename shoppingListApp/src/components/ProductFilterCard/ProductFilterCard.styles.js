import {Dimensions, StyleSheet} from 'react-native';

const device = Dimensions.get('window');

export default StyleSheet.create({
  seperator: {
    borderBottomWidth: 0.2,
    color: '#e0e0e0',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  buton_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  container: {
    marginVertical: 10,
    height: device.height * 1.9/3
  },
});

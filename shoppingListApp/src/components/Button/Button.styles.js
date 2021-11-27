import {Dimensions, StyleSheet} from 'react-native';

const device = Dimensions.get('window');

const baseStyle = StyleSheet.create({
  container: {
    backgroundColor: '#616161',
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  buton_container: {
    height: 35,
    width: device.width / 3.2,
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
});

export default {
  secondary: StyleSheet.create({
    ...baseStyle,
  }),
  primary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: '#cfcfcf',
      borderColor: 'gray',
      borderWidth: 1,
    },
    text: {
      ...baseStyle.text,
      color: '#616161',
    },
    buton_container: {
      ...baseStyle.buton_container,
      height: 30
    }
  }),
};

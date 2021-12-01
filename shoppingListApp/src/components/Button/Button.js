import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './Button.styles';

const Button = ({text, loading, onPress, theme='secondary'}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      <View style={styles[theme].buton_container}>
        <Text style={styles[theme].text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

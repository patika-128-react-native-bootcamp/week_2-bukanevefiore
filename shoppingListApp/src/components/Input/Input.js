import React from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from './Input.styles';

const Input = ({onChangeText, inputTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.input_title}>{inputTitle}</Text>
      <View style={styles.input_container}>
        <TextInput
          onChangeText={onChangeText}
        />
      </View>
    </View>
    
  );
};

export default Input;

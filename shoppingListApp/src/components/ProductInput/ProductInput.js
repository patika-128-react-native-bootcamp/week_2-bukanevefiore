import React, {useState} from 'react';
import {View} from 'react-native';
import Button from '../Button';
import Input from '../Input';
import styles from './ProductInput.styles';

const ProductInput = ({onSend}) => {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);

  // input null check and pruduct send
  function ProductSend() {
    if (!name || !price) {
      return;
    }

    onSend({name, price});
    
  }

  return (
    <View style={styles.container}>
      <Input inputTitle="Name" theme='secondary' onChangeText={setName} />
      <Input inputTitle="Price" onChangeText={setPrice} />
      <Button text="Add" onPress={ProductSend} />
    </View>
  );
};

export default ProductInput;

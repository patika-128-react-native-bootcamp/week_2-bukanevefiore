import React from 'react';
import {Text, View} from 'react-native';
import styles from './ProductCard.styles';

export default function ({product}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
}

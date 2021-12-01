/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

import ProductFilterCard from './components/ProductFilterCard';
import styles from './App.styles';
import ProductInput from './components/ProductInput';

const App = () => {
  const [productList, setProductList] = useState([]);
  const [productId, setProductId] = useState(0);

  useEffect(() => {}, []);

  // add product to list
  function handleSaveProduct({name, price}) {
    console.log(name);
    setProductId(productId + 1);

    // list structor 
    const productContent = {
      id: productId,
      name: name,
      price: price,
    };

    setProductList([...productList, productContent]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ProductFilterCard productList={productList} />
      <ProductInput onSend={handleSaveProduct} />
    </SafeAreaView>
  );
};

export default App;

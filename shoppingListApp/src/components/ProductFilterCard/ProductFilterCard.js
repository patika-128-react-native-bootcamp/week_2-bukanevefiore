import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import Button from '../Button';
import ProductCard from '../ProductCard';
import styles from './ProductFilterCard.styles';

const ProductFilterCard = ({productList}) => {
  const [filterProductList, setFilterProductList] = useState([]);

  const productRenderItem = ({item}) => <ProductCard product={item} />;
  const itemSeparatorComponent = () => <View style={styles.seperator}></View>;

  useEffect(() => {
    setFilterProductList(productList);
  }, [productList]);

  // sort by save order
  const sortDate = () => {
    filterProductList.sort((a, b) => b.id - a.id);
    setFilterProductList([...filterProductList]);
  };

  // sort price ascending
  const sortAscending = () => {
    filterProductList.sort((a, b) => a.price - b.price);
    setFilterProductList([...filterProductList]);
  };

  // sort price descending 
  const sortDescending = () => {
    filterProductList.sort((a, b) => b.price - a.price);
    setFilterProductList([...filterProductList]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buton_container}>
        <Button text="İncreased Price" onPress={sortAscending} theme='primary'/>
        <Button text="Decreasing Price" onPress={sortDescending} theme='primary'/>
        <Button text="Date" onPress={sortDate} theme='primary'/>
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={filterProductList}
        renderItem={productRenderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </View>
  );
};

export default ProductFilterCard;

import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { FavoritesContext } from '../store/favoritescontext';
import FoodList from '../components/FoodList';
import { FOODS } from '../data/dummy-data';

export default function FavoritesScreen() {
  const favoriteFoodContext = useContext(FavoritesContext);
  const favoriteFoods = FOODS.filter((food) => favoriteFoodContext.ids.includes(food.id))

  if (favoriteFoods.length === 0) {
    return <Text style={styles.noItemText}>Favori Ürününüz Yok</Text>
  }
  return (
    <FoodList items={favoriteFoods} />
  );
}

const styles = StyleSheet.create({
  noItemText: {
    alignSelf: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'lightgray',
    padding: 10,
    marginTop: 50,
    borderRadius: 10
  }
});

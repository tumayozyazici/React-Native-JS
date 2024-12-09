import { StyleSheet, Text, View,FlatList } from 'react-native';
import React from 'react';

export default function CoursesScreen() {
  const courses = [
    { name: 'Angular', id: 1 },
    { name: 'React.js', id: 2 },
    { name: 'C#', id: 3 },
    { name: 'c Programlama', id: 4 },
    { name: 'Bootstrap', id: 5 },
  ]

  return (
    <FlatList data={courses}
      //horizontal
      //showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text style={styles.content}>{item.name}</Text>
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50
  },
  content: {
    fontSize: 20,
    backgroundColor: 'yellow',
    marginVertical: 10,
    padding: 20
  }
});
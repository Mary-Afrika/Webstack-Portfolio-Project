import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const VocabularyList = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vocabulary List</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.word}</Text>
            <Text>{item.meaning}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

export default VocabularyList;

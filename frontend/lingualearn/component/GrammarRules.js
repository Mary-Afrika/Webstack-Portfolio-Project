import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GrammarRules = ({ rules }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grammar Rules</Text>
      {rules.map((rule, index) => (
        <View key={index} style={styles.ruleContainer}>
          <Text>{rule.title}</Text>
          <Text>{rule.description}</Text>
        </View>
      ))}
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
  ruleContainer: {
    marginBottom: 5,
  },
});

export default GrammarRules;

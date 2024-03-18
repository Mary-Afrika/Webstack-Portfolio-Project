import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({ placeholder, value, onChangeText, secureTextEntry, style }) => {
  return (
    <RNTextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
});

export default TextInput;

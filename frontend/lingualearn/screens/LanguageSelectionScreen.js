// screens/LanguageSelectionScreen.js

import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const LanguageSelectionScreen = ({ navigation }) => {
  const [languages, setLanguages] = useState([
    { id: '1', name: 'Spanish' },
    { id: '2', name: 'French' },
    { id: '3', name: 'German' },
    // Add more languages as needed
  ]);

  const handleLanguageSelect = (language) => {
    // Implement logic to save selected language
    navigation.navigate('Lesson', { language });
  };

  return (
    <View>
      <Text>Select a Language to Learn</Text>
      <FlatList
        data={languages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Button title={item.name} onPress={() => handleLanguageSelect(item)} />
        )}
      />
    </View>
  );
};

export default LanguageSelectionScreen;

// screens/LessonScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const LessonScreen = ({ route, navigation }) => {
  const { language } = route.params;

  const startLesson = () => {
    // Implement logic to start lesson
    navigation.navigate('Quiz', { language });
  };

  return (
    <View>
      <Text>Welcome to {language} Lessons!</Text>
      <Button title="Start Lesson" onPress={startLesson} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default LessonScreen;

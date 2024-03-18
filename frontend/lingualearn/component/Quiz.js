import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Quiz = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      {showResult ? (
        <View>
          <Text>Quiz Completed!</Text>
          <Text>Your Score: {score}/{questions.length}</Text>
        </View>
      ) : (
        <View>
          <Text>Question {currentIndex + 1}/{questions.length}</Text>
          <Text>{questions[currentIndex].question}</Text>
          <View style={styles.buttonContainer}>
            <Button title="True" onPress={() => handleAnswer(questions[currentIndex].correct === true)} />
            <Button title="False" onPress={() => handleAnswer(questions[currentIndex].correct === false)} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default Quiz;

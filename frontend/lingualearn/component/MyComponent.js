import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import TextInput from './TextInput';
import Card from './Card';

const MyComponent = () => {
  return (
    <View>
      <TextInput placeholder="Enter your name" />
      <Button title="Submit" onPress={() => console.log('Button pressed')} />
      <Card>
        <Text>This is a card component</Text>
      </Card>
    </View>
  );
};

export default MyComponent;

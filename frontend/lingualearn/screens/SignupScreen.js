// screens/SignupScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement signup logic
  };

  return (
    <View>
      <Text>Create a LinguaLearn Account</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Signup" onPress={handleSignup} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default SignupScreen;

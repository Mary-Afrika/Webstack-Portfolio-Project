// MyComponent.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, setLanguage, updateProgress } from './actions';

const MyComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const language = useSelector(state => state.language);
  const progress = useSelector(state => state.progress);

  const handleLogin = () => {
    dispatch(login({ username: 'exampleUser' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };

  const handleProgressUpdate = (lessonId, newProgress) => {
    dispatch(updateProgress(lessonId, newProgress));
  };

  return (
    <View>
      {isAuthenticated ? (
        <>
          <Text>Welcome, {user.username}</Text>
          <Button title="Logout" onPress={handleLogout} />
          <Text>Current Language: {language}</Text>
          <Button title="Change Language" onPress={() => handleLanguageChange('french')} />
          <Text>Progress: {JSON.stringify(progress)}</Text>
          <Button title="Update Progress" onPress={() => handleProgressUpdate(1, 50)} />
        </>
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
    </View>
  );
};

export default MyComponent;

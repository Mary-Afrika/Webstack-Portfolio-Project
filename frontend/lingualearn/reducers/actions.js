// actions.js

export const login = (userData) => {
  return {
    type: 'LOGIN',
    payload: userData,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const setLanguage = (language) => {
  return {
    type: 'SET_LANGUAGE',
    payload: language,
  };
};

export const updateProgress = (lessonId, progress) => {
  return {
    type: 'UPDATE_PROGRESS',
    payload: { lessonId, progress },
  };
};

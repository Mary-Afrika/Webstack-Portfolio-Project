// reducers.js

const initialState = {
  user: null,
  isAuthenticated: false,
  language: 'english',
  progress: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        language: 'english',
        progress: {},
      };
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        progress: {
          ...state.progress,
          [action.payload.lessonId]: action.payload.progress,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;

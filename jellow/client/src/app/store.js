import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice'
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    counter: counterReducer,
  },
});

// import counterReducer from '../features/counter/counterSlice';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice'
import dashboardReducer from '../features/dashboard/dashboardSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    dashboard: dashboardReducer,
    // counter: counterReducer,
  },
});

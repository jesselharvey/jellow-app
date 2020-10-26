import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: {
      username: '',
      password: ''
    }
  },
  reducers: {
    login: (state, action) => {
      return (
        state.user.username = action.payload.username,
        state.user.password = action.payload.password
      )
    }
  },
})

export const { login } = loginSlice.actions

export const loginRequest = (user) => (dispatch) => {
  dispatch(login(user))
}

export const selectUser = state => state.login.user

export default loginSlice.reducer
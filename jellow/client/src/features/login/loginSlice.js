import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: '',
    password: ''
  },
  reducers: {
    login: (state, action) => {
      return (
        state.username = action.payload.username,
        state.password = action.payload.password
      )
    }
  },
})

export const { login } = loginSlice.actions

export const loginRequest = (user) => (dispatch) => {
  dispatch(login(user))
}

export default loginSlice.reducer
import authReducer from './authReducer';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state,action) => {
        console.log("action>>>>>>>>>>>>>>",action);
      state.isAuth = action.payload
      console.log(state.isAuth);
    },
   
  },
})
export const { setAuthenticated } = authSlice.actions

export default authSlice.reducer
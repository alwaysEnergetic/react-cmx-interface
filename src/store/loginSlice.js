import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {loginApi} from '../services/api/loginApi'
import axios from 'axios'

const initialState = {
  isLogin: false,
}

export const doLogin = createAsyncThunk(
    'users/fetchByIdStatus',
    async (data, {dispatch}) => new Promise(async(resolve)=>{
     
      loginApi.getAuthCode(data).then(res=>{
          console.log(res);
      })
      dispatch(setLoginStatus());
      resolve()
    })
  )

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLoginStatus: (state) => {
      state.isLogin = true;
    },
   
  },
})

export const { setLoginStatus } = counterSlice.actions

export default counterSlice.reducer
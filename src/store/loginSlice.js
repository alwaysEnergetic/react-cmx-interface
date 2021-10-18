import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {loginApi} from '../services/api/loginApi'

const initialState = {
  isLogin: false,
}

export const doLogin = createAsyncThunk(
    'users/fetchByIdStatus',
    async (data, {dispatch}) => new Promise(async(resolve)=>{
      loginApi.getAuthCode(data).then(res=>{
        if (res.stateCode === '200' && res.isLogin.authenticaionCode) {
          dispatch(setLoginStatus());
          
        } else {
          // rj
        }
          console.log('**********' + res);
      })
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

export const selectIsLogin = (state) => state.auth.isLogin;

console.log(selectIsLogin);
export const { setLoginStatus } = counterSlice.actions

export default counterSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {loginApi} from '../services/api/loginApi';

const initialState = {
  isLogin: false,
  accessToken: '',
};

export const doLogin = createAsyncThunk(
    'users/fetchByIdStatus',
    async (data, {dispatch}) => new Promise(async(resolve, reject)=>{
      loginApi.getAuthCode({
        clientId: "7dc53df5-703e-49b3-8670-b1c468f47f1f",
        redirectUri:
            "https://live.contractexperience.com/CMx_API/2.0/oauth2/redirect",
        domainName: "test",
        email: data.email,
        password: data.password,
      }).then(res => {
        console.log('**********' + res);
        if (res && res.isAuthenticated && res.authorizationCode !== "") {
          loginApi.doLogin({
            domainName : "test",
            clientId : "7dc53df5-703e-49b3-8670-b1c468f47f1f",    
            clientSecret : "BhUDJq",
            authorizationCode : res.authorizationCode,
          }).then(res => {
            if (res && res.accessToken !== "") {
              dispatch(setLoginStatus(res.accessToken));
              resolve();
            } else {
              console.log("Error during the authenticating the user");
              reject();
            }
          }).catch(err => {
            console.log(err);
            reject();
          });
        } else {
          console.log("Error during the authenticating the user");
          reject();
        }
      }).catch(err => {
        console.log(err);
        reject();
      });      
    })
  )

export const doLogout = createAsyncThunk(
  'users/Logout',
  async (data, {dispatch}) => new Promise(async(resolve, reject) => {
    dispatch(setLogoutStatus());
    resolve();    
  })
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.isLogin = true;
      state.accessToken = action.payload;
    },
    setLogoutStatus: (state, action) => {
      state.isLogin = false;
      state.accessToken = '';
    }
  },
})

export const selectIsLogin = (state) => state.auth.isLogin;
export const selectAccessToken = (state) => state.auth.accessToken;
export const { 
  setLoginStatus,
  setLogoutStatus,
} = counterSlice.actions;
export default counterSlice.reducer;
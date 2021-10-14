import {post} from './base';

export const loginApi = {
    getAuthCode: (data) =>
      post(`/authenticateUser`, {...data}).then(
        ({ data }) => data
      ),   
    doLogin: (data) =>
      post(`/token`, {...data}).then(
        ({ data }) => data
      ),  
  };
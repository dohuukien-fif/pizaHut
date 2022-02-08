import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import userApi from './../api/userApi';
export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  // currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  // currentUser: undefined,
};
export const register: any = createAsyncThunk('users/register', async (payload: any) => {
  //call api resgister
  const data: any = await userApi.register(payload);
  console.log(data);
  //save data local
  localStorage.setItem('token', data.accessToken);
  localStorage.setItem('users', JSON.stringify(payload));

  console.log(payload);

  console.log(data);
  return data;
});
export const login: any = createAsyncThunk('users/login', async (payload: any) => {
  //call api resgister
  const data: any = await userApi.Login(payload);
  console.log(data);
  //save data local
  localStorage.setItem('token', data.accessToken);
  localStorage.setItem('dm', JSON.stringify(data.others));
  return data.others;
});
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {},
    loading: false,
  },
  reducers: {
    logout(state) {
      //clear local
      localStorage.removeItem('dm');
      localStorage.removeItem('token');
      state.current = {};
    },
  },
  extraReducers: {
    [register.pending]: (state, action: any) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action: any) => {
      state.current = action.payload;
      state.loading = false;
    },
    [register.rejected]: (state, action: any) => {
      state.loading = true;
    },

    [login.pending]: (state, action: any) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action: any) => {
      state.current = action.payload;
      state.loading = false;
    },
    [login.rejected]: (state, action: any) => {
      state.loading = true;
    },
  },
});

const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;

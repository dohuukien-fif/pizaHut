import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import userApiAdmin from './../api/userApiAdmin';
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
export const register: any = createAsyncThunk('usersAdmin/register', async (payload: any) => {
  //call api resgister
  const data: any = await userApiAdmin.register(payload);
  console.log(data);
  //save data local
  localStorage.setItem('tokenAdmin', JSON.stringify(data.accessToken));
  localStorage.setItem('userAdmin', JSON.stringify(data.newUser));

  console.log(payload);

  console.log(data);
  return data.user;
});
export const login: any = createAsyncThunk('usersAdmin/login', async (payload: any) => {
  //call api resgister
  console.log(payload);
  const data: any = await userApiAdmin.Login(payload);
  console.log('loginn', data);
  //save data local
  localStorage.setItem('tokenAdmin', JSON.stringify(data.accessToken));
  localStorage.setItem('userAdmin', JSON.stringify(data.user));
  return data.user;
});
export const profile: any = createAsyncThunk('usersAdmin/profile', async (payload: any) => {
  //call api resgister
  const data: any = await userApiAdmin.update(payload);
  console.log('profile', data);
  //save data local

  return data;
});
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: localStorage.getItem('userAdmin')
      ? JSON.parse(localStorage.getItem('userAdmin') || '')
      : {},
    setting: {},
    loading: false,
  },
  reducers: {
    logout(state) {
      //clear local
      localStorage.removeItem('userAdmin');
      localStorage.removeItem('tokenAdmin');
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

    [profile.pending]: (state, action: any) => {
      state.loading = true;
    },
    [profile.fulfilled]: (state, action: any) => {
      state.current = action.payload;
      state.loading = false;
    },
    [profile.rejected]: (state, action: any) => {
      state.loading = true;
    },
  },
});

const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;

import { createSlice, createAction } from '@reduxjs/toolkit';
import { AuthStore } from './types';
import { User, AuthValues } from '../../types';

const initialState: AuthStore = {
  isAuth: false,
  loading: 'idle',
  user: null,
  error: null,
};

export const signInRequested = createAction<AuthValues>('SIGN_IN_REQUESTED');
export const signInSuccess = createAction<User>('SIGN_IN_SUCCESS');
export const signInFailure = createAction<string>('SIGN_IN_FAILURE');

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: state => {
      state.isAuth = false;
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signInRequested, state => {
        state.loading = 'pending';
      })
      .addCase(signInSuccess, (state, { payload }) => {
        state.loading = 'idle';
        state.isAuth = true;
        state.user = payload;
      })
      .addCase(signInFailure, (state, { payload }) => {
        state.loading = 'idle';
        state.error = payload;
      });
  },
});

const { actions: sliceActions } = AuthSlice;

export const actions = { ...sliceActions, signInRequested, signInSuccess, signInFailure };

export const { reducer } = AuthSlice;

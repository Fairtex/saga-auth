import { createSlice, createAction } from '@reduxjs/toolkit';
import { AuthStore } from './types';
import { User, AuthValues } from '../../types';

const initialState: AuthStore = {
  isAuth: false,
  loading: 'idle',
  user: null,
  error: null,
};

const signInRequested = createAction<AuthValues>('SIGN_IN_REQUESTED');
const signInSuccess = createAction<User>('SIGN_IN_SUCCESS');
const signInFailure = createAction<string>('SIGN_IN_FAILURE');

const signOutRequested = createAction('SIGN_OUT_REQUESTED');
const signOutSuccess = createAction('SIGN_OUT_SUCCESS');
const signOutFailure = createAction<string>('SIGN_OUT_FAILURE');

const sessionSignOutRequested = createAction('SESSION_SIGN_OUT_REQUESTED');

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
      })
      .addCase(signOutRequested, state => {
        state.loading = 'pending';
      })
      .addCase(sessionSignOutRequested, state => {
        state.loading = 'pending';
      })
      .addCase(signOutSuccess, state => {
        state.loading = 'idle';
        state.isAuth = false;
        state.user = null;
      })
      .addCase(signOutFailure, (state, { payload }) => {
        state.loading = 'idle';
        state.error = payload;
      });
  },
});

const { actions: sliceActions } = AuthSlice;

export const actions = {
  ...sliceActions,
  signInRequested,
  signInSuccess,
  signInFailure,
  signOutRequested,
  signOutSuccess,
  signOutFailure,
  sessionSignOutRequested,
};

export const { reducer } = AuthSlice;

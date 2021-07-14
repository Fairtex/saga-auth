import { RootState } from '../../store';

export const selectAuth = (state: RootState) => state.auth.isAuth;
export const selectLoadingStatus = (state: RootState) => state.auth.loading;
export const selectUserData = (state: RootState) => state.auth.user;

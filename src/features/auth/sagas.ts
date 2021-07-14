import { call, put, takeLeading } from 'redux-saga/effects';
import { fetchAuth, forwardTo } from '../../utils';
import { User, AuthValues } from '../../types';
import { actions } from './slice';

export function* logInAsync(action: { payload: AuthValues }) {
  const { payload } = action;
  try {
    const user: User = yield call(fetchAuth, 2000, payload);
    yield put(actions.signInSuccess(user));
    yield call(forwardTo, '/profile');
  } catch (err) {
    yield put(actions.signInFailure(err.message));
  }
}

export function* watchLogInAsync() {
  yield takeLeading(actions.signInRequested, logInAsync);
}

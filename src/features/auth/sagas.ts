import { all, call, put, take, takeLeading } from 'redux-saga/effects';
import { fetchAuth, fetchLogOut, forwardTo } from '../../utils';
import { User, AuthValues } from '../../types';
import { actions } from './slice';

function* logInAsync(action: { payload: AuthValues }) {
  const { payload } = action;
  try {
    const user: User = yield call(fetchAuth, 2000, payload);
    yield put(actions.signInSuccess(user));
    yield call(forwardTo, '/profile');
  } catch (err) {
    yield put(actions.signInFailure(err.message));
  }
}

function* logoutFlow() {
  while (true) {
    yield take([actions.signOutRequested, actions.sessionSignOutRequested]);
    try {
      yield call(fetchLogOut, 1000);
      yield put(actions.signOutSuccess());
    } catch (err) {
      yield put(actions.signOutFailure(err.message));
    }
  }
}

function* watchLogInAsync() {
  yield takeLeading(actions.signInRequested, logInAsync);
}

export default function* rootSaga() {
  yield all([watchLogInAsync(), logoutFlow()]);
}

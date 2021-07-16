import { all, call, put, take, takeLeading } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { fetchAuth, fetchLogOut, forwardTo } from '../../utils';
import { User, AuthValues } from '../../types';
import { actions } from './slice';
import SocketService from '../../services/socket';
// import { Socket } from 'socket.io-client';

function* logInAsync(action: { payload: AuthValues }) {
  const { payload } = action;
  try {
    const user: User = yield call(fetchAuth, 2000, payload);
    yield put(actions.signInSuccess(user));
    yield call(forwardTo, '/profile');
    yield call(SocketService.send, JSON.stringify(user));
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

function createWebSocketChannel(socket: WebSocket) {
  return eventChannel(emitter => {
    socket.onopen = () => {
      emitter('socket connect open');
    };
    socket.onmessage = e => {
      emitter(e.data);
    };
    return () => socket.close;
  });
}

function* watchLogInAsync() {
  yield takeLeading(actions.signInRequested, logInAsync);
}

function* watchLogInSocket(): any {
  yield call(SocketService.connect);
  const socketChannel = yield call(createWebSocketChannel, SocketService.client!);

  while (true) {
    const payload: string = yield take(socketChannel);
    yield call(console.log, payload);
  }
}

export default function* rootSaga() {
  yield all([watchLogInAsync(), logoutFlow(), watchLogInSocket()]);
}

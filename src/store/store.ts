import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { watchLogInAsync } from '../features/auth/sagas';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const createRouterMiddleware = routerMiddleware(history);

export const store = configureStore({
  reducer: rootReducer(history),
  middleware: [...getDefaultMiddleware({ serializableCheck: false }), sagaMiddleware, createRouterMiddleware],
});

export const persistor = persistStore(store);

sagaMiddleware.run(watchLogInAsync);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

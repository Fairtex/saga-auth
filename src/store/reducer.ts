import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as AuthReducer } from '../features/auth';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

const authPersistConfig = {
  storage,
  key: 'auth',
  whitelist: ['isAuth', 'user'],
};

const rootReducer = (history: History) =>
  combineReducers({
    auth: persistReducer(authPersistConfig, AuthReducer),
    router: connectRouter(history),
  });

export default rootReducer;

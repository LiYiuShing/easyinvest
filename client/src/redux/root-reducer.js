import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import symbolReducer from './symbol/symbol.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    user: userReducer,
    symbol: symbolReducer
});

export default persistReducer(persistConfig, rootReducer);
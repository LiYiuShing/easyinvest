import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { symbolSagas } from './symbol/symbol.sagas';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(symbolSagas)
    ]);
}
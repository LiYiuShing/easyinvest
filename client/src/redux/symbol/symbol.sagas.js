import { takeLatest, put, all, call } from "redux-saga/effects";

import SymbolActionTypes from './symbol.types';
import { fetchSymbolSuccess, fetchSymbolFailure } from './symbol.actions';

export function* fetchSymbol(action) {
    try {
        const result = yield call(
            () => fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${action.payload}&outputsize=compact&apikey=${process.env.REACT_APP_API_STOCK_KEY}`)
                .then(res => res.json())
        );
        if(result["Error Message"] || result["Note"]) {
            if(result["Error Message"]) {
                yield put(fetchSymbolFailure(result["Error Message"]));
            } else {
                yield put(fetchSymbolFailure(result["Note"]));
            }
        }else{
            yield put(fetchSymbolSuccess(result));
        }
    } catch(err) {
       yield put(fetchSymbolFailure(err));
    } 
}


export function* fetchSymbolStart() {
    yield takeLatest(SymbolActionTypes.Symbol_Fetch_START, fetchSymbol);
}

export function* symbolSagas() {
    yield all([
        call(fetchSymbolStart)
    ]);
}

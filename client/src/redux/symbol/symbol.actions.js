import SymbolActionTypes from './symbol.types';

export const fetchSymbolStart = (symbol) => ({
    type: SymbolActionTypes.Symbol_Fetch_START,
    payload: symbol
});

export const fetchSymbolSuccess = (stockData) => ({
    type: SymbolActionTypes.Symbol_Fetch_SUCCESS,
    payload: stockData
});

export const fetchSymbolFailure = (error) => ({
    type: SymbolActionTypes.Symbol_Fetch_FAILURE,
    payload: error
});
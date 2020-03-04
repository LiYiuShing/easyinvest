import SymbolActionTypes from './symbol.types';

const INITIAL_STATE = {
    stockData: null,
    symbol: null,
    error: null
}

const symbolReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SymbolActionTypes.Symbol_Fetch_START:
            return {
                ...state,
                symbol: action.payload
            };
        case SymbolActionTypes.Symbol_Fetch_SUCCESS:
            return {
                ...state,
                stockData: action.payload,
                error: null
            };
        case SymbolActionTypes.Symbol_Fetch_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default symbolReducer;
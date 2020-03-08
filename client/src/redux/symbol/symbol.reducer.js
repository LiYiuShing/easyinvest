import SymbolActionTypes from './symbol.types';

const INITIAL_STATE = {
    stockData: null,
    symbol: null,
    loading: 'init',
    error: null
}

const symbolReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SymbolActionTypes.Symbol_Fetch_START:
            return {
                ...state,
                symbol: action.payload,
                loading: true
            };
        case SymbolActionTypes.Symbol_Fetch_SUCCESS:
            return {
                ...state,
                stockData: action.payload,
                error: null,
                loading: false
            };
        case SymbolActionTypes.Symbol_Fetch_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default symbolReducer;
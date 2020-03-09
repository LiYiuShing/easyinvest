import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSymbolStart } from '../../redux/symbol/symbol.actions';
import StockChart from '../../components/stock/stockchart/stockchart.component';


const SymbolPage = ({fetchSymbolStart, symbolData, loading, error}) => {
    const { symbol } = useParams();

    useEffect(() => {
        fetchSymbolStart(symbol);
    }, [fetchSymbolStart]);

    return (
        <div>
            { loading ? 
                <div>loading</div> : 
                <StockChart 
                    data={symbolData}
                /> 
            }
        </div>
    )
};

const mapStateToProps = state => ({
    symbolData: state.symbol.stockData,
    loading: state.symbol.loading,
    error: state.symbol.error
})

const mapDispatchToProps = dispatch => ({
    fetchSymbolStart: (symbol) => dispatch(fetchSymbolStart(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(SymbolPage);
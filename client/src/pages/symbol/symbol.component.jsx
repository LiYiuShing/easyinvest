import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { _404 } from './../error/errorpage.component';

import { fetchSymbolStart } from '../../redux/symbol/symbol.actions';
import StockChart from '../../components/stock/stockchart/stockchart.component';


const SymbolPage = ({fetchSymbolStart, symbolData, loading, error}) => {
    const { symbol } = useParams();
    const mounted = useRef();

    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
        } else {
            fetchSymbolStart(symbol);
        }
    }, [symbol])
    
    if(loading) return (<div></div>);
    if(error) return (<div><_404 /></div>);
    
    return (
        <div>
            <StockChart 
                data={symbolData}
            />    
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
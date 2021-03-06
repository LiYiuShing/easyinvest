import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSymbolStart } from '../../redux/symbol/symbol.actions';

import StockDetail from '../../components/stock/stockdetail/stockdetail.component';

const SymbolPage = ({fetchSymbolStart, symbolData }) => {
    const { symbol } = useParams();
    const mounted = useRef();
    const [stockDataState, setstockDataState] = useState(null);
    const [stockHistory, setstockHistory] = useState(null);

    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
        } else {
            fetchSymbolStart(symbol);
            getStockDatails(symbol);
        }
    }, [symbol])

    const getStockDatails = (stockSymbol) => {
        try {
            setstockDataState('')
            setstockHistory('')
            fetch(`http://127.0.0.1:5000/api/stock/info/${stockSymbol}`)
                .then(res => res.json())
                .then(data => setstockDataState(data))
            fetch(`http://127.0.0.1:5000/api/stock/history/${stockSymbol}`)
                .then(res => res.json())
                .then(data => setstockHistory(data))
        
        } catch (err) {
            return err
        }
    }
    
    //if(error) return (<div><_404 /></div>);

    return (
        <div className='container'>
            <div className='stockDatils'>
                <StockDetail
                    data={stockDataState}
                    history={stockHistory}
                    symbolData={symbolData}
                />
            </div>
  
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
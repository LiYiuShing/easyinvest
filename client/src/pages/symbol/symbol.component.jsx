import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSymbolStart } from '../../redux/symbol/symbol.actions';



const SymbolPage = ({fetchSymbolStart}) => {
    const { symbol } = useParams();

    useEffect(() => {
        fetchSymbolStart(symbol);
    }, [fetchSymbolStart]);

    return (
        <div>{symbol}</div>
    )
};

const mapDispatchToProps = dispatch => ({
    fetchSymbolStart: (symbol) => dispatch(fetchSymbolStart(symbol))
});

export default connect(null, mapDispatchToProps)(SymbolPage);
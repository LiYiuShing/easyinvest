import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SymbolPage = () => {
    const { symbol } = useParams();

    return (
        <div>{symbol}</div>
    )
}

export default SymbolPage;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './search.styles.scss';

const Search = () => {

    const [searchState, setSearchState] = useState("");
    const [searchResult, setSearchResult] = useState({
        stockdata: '',
        loading: false,
        error: null
    });
    const [typingTimeOut, setTypingTimeOut] = useState(0);
    const [displaySearchBox, setDisplaySearchBox] = useState(true);

    useEffect(() => {
        if (typingTimeOut){
            clearTimeout(typingTimeOut)
        }
        setTypingTimeOut(setTimeout(() => {
            fetchData(searchState)}, 2000));
    }, [searchState]);


    const handleOnSearch = (e) => {

        setSearchState(e.target.value)
    }

    const fetchData = (keywords) => {
        setSearchResult({loading: true})
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${process.env.REACT_APP_API_STOCK_KEY}`)
            .then(res => res.json())
            .then((result) => {
                setSearchResult({
                    stockdata: result,
                    loading: false
                });
                setDisplaySearchBox(true)
            })
            .catch((error) => {
                setSearchResult({
                    stockdata: '',
                    error: error
                })
            })
    }

    const { stockdata, loading } = searchResult

    return (
        <div>
            <div className="search-input">
                <input 
                    className="search-input-content"
                    id="searchInput"
                    type="text" 
                    onChange={handleOnSearch} 
                    placeholder="" 
                />
            </div>

            <div className='result' id={displaySearchBox ? 'searchBoxShowTrue' : 'searchBoxShowFalse'}>
                {
                    loading || stockdata["Error Message"] ?
                    <div className='loading'>
                    </div>
                :
                    <ul className='search-result'>
                    {stockdata  ?
                        stockdata.bestMatches.map((item, key) => (
                            <Link
                                key={Object.values(item)[0]} 
                                to={`/symbol/${Object.values(item)[0]}`} 
                                onClick={() =>  {
                                    document.getElementById('searchInput').value = '';
                                    setDisplaySearchBox(false);
                                }}
                            >
                                <li key={Object.values(item)[0]} className='search-result-content'>
                                    <div className='search-result-symbol'>{Object.values(item)[0]}</div>
                                    <div className='search-result-name'>{Object.values(item)[1]}</div>
                                </li>
                            </Link>
                        ))
                        :   
                            <li></li>
                    }
                    </ul>
                }
            </div>
        </div>
    )
    
};

export default Search;

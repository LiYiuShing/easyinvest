import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './search.styles.scss';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const Search = () => {

    const [searchState, setSearchState] = useState("");
    const [searchResult, setSearchResult] = useState({
        stockdata: '',
        loading: false,
        error: null
    });
    const [typingTimeOut, setTypingTimeOut] = useState(0);
    const [displaySearchBox, setDisplaySearchBox] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        if (typingTimeOut){
            clearTimeout(typingTimeOut)
        }
        setTypingTimeOut(setTimeout(() => {
            fetchData(searchState)}, 2000));
    }, [searchState]);

    const handleOnSearch = (e) => {
        setSearchState(e.target.value);
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setDisplaySearchBox(false);
        setAnchorEl(null);
    };

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
                    placeholder="Stock Symbol"
                />
            </div>
                {
                    loading || stockdata["Error Message"] ?
                    <div className='loading'>
                    </div>
                :
                    <StyledMenu 
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl) && displaySearchBox}
                        onClose={handleClose}
                    >
                        {stockdata  ?
                            stockdata.bestMatches.map((item, key) => (
                                <Link  key={key}
                                    className = 'result-dropdown-content-link'
                                    to={`/symbol/${Object.values(item)[0]}`} 
                                    onClick={() =>  {
                                        document.getElementById('searchInput').value = '';
                                        handleClose();
                                    }}
                                >
                                    <MenuItem key={key}>
                                        <div>
                                            <div className='search-result-symbol'>{Object.values(item)[0]}</div>
                                            <div className='search-result-name'>{Object.values(item)[1]}</div>
                                        </div>
                                    </MenuItem>
                                </Link>
                            ))
                            :   
                                <div></div>
                        }
                    </StyledMenu>
                }
        </div>
    )
    
};

export default Search;

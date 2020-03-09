import React from 'react';
import { Link } from 'react-router-dom';

import './search.styles.scss';

class Search extends React.Component {
    constructor() {
        super();

        this.state ={
            search: '',
            stockdata: '',
            err : null,
            loading: false,
            typing: false,
            typingTimeout: 0
        }

        this.handleOnSearch = this.handleOnSearch.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    handleOnSearch(e) {
        const self = this;

        if (self.state.typingTimeout) {
            clearTimeout(self.state.typingTimeout);
        }

        if (e.target.value) {
            self.setState({
                search: e.target.value,
                tying: false,
                loading: true,
                typingTimeout: setTimeout(() => {
                    self.fetchData(self.state.search);
                    }, 1000)
            });
        
        }else{
            self.setState({
                search: '',
                loading: false
            });
        }

    }

    fetchData(keywords) {
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${process.env.REACT_APP_API_STOCK_KEY}`)
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        stockdata: result,
                        loading: false
                    });
            })
            .catch(
                (error) => {
                    this.setState({
                        stockdata: '',
                        error: error
                    })
            })
    }

    render() {
        const { loading, search, stockdata } = this.state;
        
        return (
            <div>
                <div className="search-input">
                    <input 
                        className="search-input-content"
                        id="searchInput"
                        type="text" 
                        onKeyUp={this.handleOnSearch} 
                        placeholder="" 
                    />
                </div>

                <div className='result'>
                    {loading ?
                        <div className='loading'>
                        </div>
                    :
                        <ul className='search-result'>
                        {search && stockdata  ?
                                stockdata.bestMatches.map((item, key) => (
                                    <Link 
                                        key={Object.values(item)[0]} 
                                        to={`/symbol/${Object.values(item)[0]}`} 
                                        onClick={() =>  {
                                            document.getElementById('searchInput').value = '' 
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
    }
};

export default Search;

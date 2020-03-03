import React from 'react';
import './search.styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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
                    <label className="search-label">
                        Stock Symbol
                    </label>
                    <input 
                        className="search-input-content"
                        type="text" 
                        onKeyUp={this.handleOnSearch} 
                        placeholder="" 
                    />
                </div>

                <div className='result'>
                    {   
                        loading ?
                            <div className='loading'>
                                <CircularProgress color='red' />
                            </div>
                        :
                            <ul className='search-result'>
                            { 
                                search && stockdata  ?
                                        stockdata.bestMatches.map((item, key) => (
                                            <li key={key} className='search-result-content'>
                                                <div className='search-result-symbol'>{Object.values(item)[0]}</div>
                                                <div className='search-result-name'>{Object.values(item)[1]}</div>
                                            </li>
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

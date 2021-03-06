import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import parseAmount from '../../../utils/parseAmount';

import Loader from '../../loader/loader';

import StockMonthlyReturn from '../stockdetail/stockmonthlyreturn/stockmonthlyreturn.component';
import StockChart from '../stockdetail/stockchart/stockchart.component';
import News from './news/news.conponent';

import './stockdetail.styles.scss';

import { ReactComponent as Up } from '../../../assets/caret-arrow-up.svg'
import { ReactComponent as Down } from '../../../assets/drop-down-arrow.svg'

const keyIndex = ['symbol', 'shortName', 'previousClose', 'volume', 'averageVolume', 'sharesShort', 'shortRatio', 'beta', 'marketCap', 'fiftyDayAverage', 'trailingPE',
    'trailingEps', 'dividendRate', 'dividendYield'
]

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '16px',
        margin: '16px 0',
        color: '#373a3c',
        fontSize: '14px',
    },
    control: {
        padding: theme.spacing(3),
        },
    MuiTypography: {
        body1: 'body1'
    },
    body1: {
        fontSize: '14px'
    },
    h4: {
        fontSize: '28px',
    },
    green: {
        color: '#3fcc6f',
    },
    red: {
        color: '#fd6e70',
    },
    grey: {
        color: '#808080',
    },
    svg: {
        minWidth: '28px',
        maxwidth: '28px'
    },
    space: {
        marginTop: '8px'
    },
    item_padding: {
        padding: '5px 0',
        color: '#808080',
    }
}));

const StockDetailHeader = (props) => {
    const { data, history } = props;
    const classes = useStyles();
    const price = Object.values(history.Close).reverse()[0]

    const keyIndex = {
        'H': Object.values(history.High).reverse()[0],
        'L': Object.values(history.Low).reverse()[0],
        'O': Object.values(history.Open).reverse()[0],
        'P': data['previousClose']
    }
    
    const priceChange = () => {

        const change = (price - data['previousClose']).toFixed(3)
        const changeInPercent = ((price - data['previousClose']) / data['previousClose'] * 100).toFixed(3)

        if (change >= 0) {return (
            <div>
                <Typography variant="h4" className={`${classes.green} ${classes.h4}`}><Up className='svg' />{(price).toFixed(2)}</Typography>
                <Typography className={`${classes.green} ${classes.body1}`} variant="h6">+{change} +{changeInPercent}%</Typography>
            </div>
        )} else { return(
            <div>
                <Typography variant="h4" className={`${classes.red} ${classes.h4}`}><Down className='svg' />{(price).toFixed(2)}</Typography>
                <Typography className={`${classes.red} ${classes.body1}`} variant="h6">{change} {changeInPercent}%</Typography>
            </div>
        )}
    }
    
    return(
        <Grid item xs={6} sm={4} md={2} container className={classes.control}>
            {priceChange()}
            <Grid container>
                {Object.keys(keyIndex).map((item ,key) => (
                    <Grid item xs={6} key={key}>
                        <Typography className={classes.body1} variant="body1">{item}: {keyIndex[item]} </Typography>
                    </Grid>
                ))
                }
            </Grid>
        </Grid>
    )
}

const StockInfo = (props) => {
        const { data, keyIndex } = props;
        const classes = useStyles();

        return (
            <Grid item xs={6} sm={4} md={4} container className={classes.control}>
                {
                    keyIndex.map((item, key) => (
                        <Grid container key={key}>
                            <Grid item xs={7}>
                                <Typography className={classes.body1} variant="body1">{item.toUpperCase()}: </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography className={classes.body1} variant="body1">{parseAmount(data[item])}</Typography>
                            </Grid> 
                        </Grid>
                    ))
                }
            </Grid>
        )

}

const StockDetail = (props) => {
    const classes = useStyles();
    const { data, history } = props
    const dataKeyValue = {};
    const today = new Date();

    if(data) {
            keyIndex.map((item, key) => {
                dataKeyValue[item.toUpperCase()] = data[item];
            }) 
    }
    


    return (
        <div>
            {data && history ? (
                <div>
                    <Paper className={classes.root} elevation={3}>
                        <Grid container>
                            <h2>{data['symbol']}  {data['shortName']}</h2>
                        </Grid>
                        <Grid container>
                            <Grid container>
                                <StockDetailHeader data={data} history={history} />
                                <StockInfo data={data} keyIndex={keyIndex.slice(3, 8)} />
                                <StockInfo data={data} keyIndex={keyIndex.slice(8, -1)} />
                            </Grid> 
                            <Grid className={classes.grey} container align='right'>
                                Last Updated: {today.toLocaleTimeString('it-IT')} 
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper className={classes.root} elevation={3}>
                            <Grid>
                                <h1>Performances</h1>
                                <StockChart history={history} />
                            </Grid>
                            <Grid>
                                <h1>Monthly Performances</h1>
                                <StockMonthlyReturn history={history} />
                            </Grid>
                    </Paper>

                    <Paper className={classes.root} elevation={3}>
                        <Grid container className={classes.root}>
                            <Grid container>
                                <h1>About {data['shortName']}</h1>
                                <Grid>{data['longBusinessSummary']}</Grid>
                            </Grid>
                            <Grid container className={classes.space}>
                                <Grid item container className={classes.item_padding}>
                                    <Grid item md={1}> 
                                        <Typography variant="body2">Sector</Typography>
                                    </Grid>
                                    <Grid item md={4}> 
                                        <Typography variant="body2">{data['sector']}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container className={classes.item_padding}>
                                    <Grid item md={1}> 
                                        <Typography variant="body2">Industry</Typography>
                                    </Grid>
                                    <Grid item md={4}> 
                                        <Typography variant="body2">{data['industry']}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container className={classes.item_padding}>
                                    <Grid item md={1}> 
                                        <Typography variant="body2">Website</Typography>
                                    </Grid>
                                    <Grid item md={4}> 
                                        <Typography variant="body2"><a href={data['website']}>{data['website']}</a></Typography>
                                    </Grid>
                                </Grid>

                                <News company={data['shortName']} />
                            </Grid>

                        </Grid>
                    </Paper>
                </div>
                ) : (
                    <div>
                        <Paper className={classes.root} elevation={3}>
                            <Loader />
                        </Paper>
                        <Paper className={classes.root} elevation={3}>
                            <Grid md={12}>
                                 <Loader />
                            </Grid>
                            <Grid md={12}>
                                 <Loader />
                            </Grid>
                            <Grid md={12}>
                                 <Loader />
                            </Grid>
                        </Paper>
                        <Paper className={classes.root} elevation={3}>
                            <Grid md={12}>
                                <Loader />
                            </Grid>
                            <Grid md={12}>
                                <Loader />
                            </Grid>
                        </Paper>
                    </div>
            )}
        </div>
    )
    
}

export default StockDetail;

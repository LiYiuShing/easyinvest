import React, {useEffect, useState}  from 'react';

import PropTypes from 'prop-types';
import { GridList, Grid, Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import parseAmount from '../../../utils/parseAmount';

import StockMonthlyReturn from '../stockdetail/stockmonthlyreturn/stockmonthlyreturn.component';
import StockChart from '../stockdetail/stockchart/stockchart.component';

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
        color: '#151723',
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
                <Typography variant="h4" className={`${classes.green} ${classes.h4}`}><Up className='svg' />{price}</Typography>
                <Typography className={`${classes.green} ${classes.body1}`} variant="h6">+{change} +{changeInPercent}%</Typography>
            </div>
        )} else { return(
            <div>
                <Typography variant="h4" className={`${classes.red} ${classes.h4}`}><Down className='svg' />{price}</Typography>
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
    const today = new Date;

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
                            <Typography variant="h6">{data['symbol']}  {data['shortName']}</Typography>
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
                        <Typography>Performances</Typography>
                        <StockChart history={history} />
                        <StockMonthlyReturn history={history} />
                    </Paper>

                    <Paper className={classes.root} elevation={3}>
                        <Grid container>
                            <Typography>About {data['shortName']}</Typography>
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
                                    <Typography variant="body2"><a>{data['industry']}</a></Typography>
                                </Grid>
                            </Grid>
                            <Grid item container className={classes.item_padding}>
                                <Grid item md={1}> 
                                    <Typography variant="body2">Website</Typography>
                                </Grid>
                                <Grid item md={4}> 
                                    <Typography variant="body2"><a>{data['website']}</a></Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Paper>
                </div>
                ) : (
                    <Paper className={classes.root} elevation={3}>
                        LOAD緊呀屌
                    </Paper>
            )}
        </div>
    )
    
}

export default StockDetail;

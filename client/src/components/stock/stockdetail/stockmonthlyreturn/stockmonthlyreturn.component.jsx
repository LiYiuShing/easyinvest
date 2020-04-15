import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
    root: {

    },
    positive: {
        color: '#3fcc6f'
    },
    negative: {
        color: '#fd6e70'
    }
});

const createDateJSON = (dataJSON, s) => {
    let DateJSON = [];
    let YearTemplate = [];
    let FinalResult = {};

    //constructor
    for(let i=0; i < 5; i++) {
        const newObj = {};
        const currentYear = new Date().getFullYear() - i
        
        for(let j = 1; j < 13; j++) {
            newObj[j.toString()] = []
        }
        DateJSON.push(newObj)
        FinalResult[currentYear] = ''
        YearTemplate.push(currentYear)
    }
    
    //Mapping into constructor
    Object.entries(dataJSON).map(([key, value]) => {
        const Year = new Date(key).getFullYear()
        const Month = new Date(key).getMonth() + 1
        for (let i = 0; i < 5; i++) {
            for (let j = 1; j < 13; j++) {
                if ((Year == YearTemplate[i]) && (Month == j))
                    DateJSON[i][j].push(value)
            }
        }
    })

    //Reducer
    for (let i = 0; i < 5; i++) {
        const newObj = {}
        const currentYear = new Date().getFullYear() - i
        for(let j = 1; j < 13; j++) {
            const data = DateJSON[i][j];
            var ReuceResult = '';

            //Open
            if(s == 'close') {
                ReuceResult = data[data.length - 1]
            } else {
                ReuceResult = data[0]
            }        
            newObj[j] = ReuceResult
        }
        FinalResult[currentYear] = newObj
    }
    return FinalResult
}

const convertToAvg = (open, close) => {
    const resultJSON = {}
    for (let i = 0; i < 5; i++) {
        const newObj = {}
        const currentYear = new Date().getFullYear() - i
        for(let j = 1; j < 13; j++) {
            const openSum = open[currentYear][j]
            const closeSum = close[currentYear][j]
            const change = ((((closeSum - openSum ) / openSum)) * 100).toFixed(2)
      
            newObj[j] = change
        }
        resultJSON[currentYear] = newObj
    }
    return resultJSON
}


const StockMonthlyReturn = (props) => {
    const { history } = props;
    const classes = useStyles();
    let MonthTemplate = ['Year', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const open = createDateJSON(history.Open, 'open');
    const close = createDateJSON(history.Close, 'close');
    const avg = convertToAvg(open, close);



    return(
        <TableContainer>
            <Table className="table" aria-label="a table">
                <TableHead>
                <TableRow>
                    {
                        MonthTemplate.map((item ,key) =>  (
                            <TableCell key={key}>
                               {item}
                            </TableCell>
                        ))
                    }
                </TableRow>
                </TableHead>
                <TableBody>
                    {Object.entries(avg).reverse().map(([key, value]) => (
                        <TableRow key={key} align="center">
                            <TableCell component="th" scope="row" align="center" fontWeight="fontWeightRegular">
                                {key}
                            </TableCell>
                            {Object.entries(value).map(([key, value]) => (
                                <TableCell fontWeight="fontWeightRegular" key={key} className={ value > 0 ? classes.positive : value < 0 ? classes.negative  : ''} align="center" >
                                    {!isNaN(value) ? value + "%" :  "-"}  
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
    
}

export default StockMonthlyReturn;
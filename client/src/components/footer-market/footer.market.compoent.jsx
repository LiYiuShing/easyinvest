import React, { useState, useEffect } from 'react';
import './footer.market.styles.scss';
import Grid from '@material-ui/core/Grid';


import { ReactComponent as Up } from '../../assets/caret-arrow-up.svg'
import { ReactComponent as Down } from '../../assets/drop-down-arrow.svg'

const FooterMarket = () => {
    const [market, setMarket] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        try {
            setLoading(true)
            fetch(`http://127.0.0.1:5000/api/market`)
                .then(res => res.json())
                .then(data =>  {
                    setMarket(data)
                    setLoading(false)
                })
        } catch (err) {
            return err
        }
      }, []);

    return(
        <Grid container className="footer-stock">
            <Grid item md={9}>
          
            </Grid>
            { !loading ? (
                <Grid item>
                    <ul>
                        <li>
                            S&P {market[0] >= 0 ? <span className="positive"><Up className="svg" />{market[0]}</span> : <span className="negative"><Down className="svg" />{market[0]}</span>}%
                        </li>
                        <li>
                            DJIA {market[1] >= 0 ? <span className="positive"><Up className="svg" />{market[1]}</span> : <span className="negative"><Down className="svg" />{market[1]}</span>}%
                        </li>
                        <li>
                            Nasdaq {market[2] >= 0 ? <span className="positive"><Up className="svg" />{market[2]}</span> : <span className="negative"><Down className="svg" />{market[2]}</span>}%
                        </li>
                    </ul>
                </Grid>
            ) : (<div></div>)}
        </Grid>
    )
}

export default FooterMarket;

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Crypto from './Crypto'

const CryptoGrid = () => {

    const [cryptos, setCryptos] = useState([]);

    useEffect (() => {
      axios.get('https://api.coincap.io/v2/assets')
      .then(function (response) {
        setCryptos([...response.data.data])
      })
      .catch(function (error) {
        console.log(error);
      })
    })

    return(
        <div>
            {cryptos ? (
                <div>
                    <Grid container spacing={4} style={{padding: 24}}>
                        {cryptos.map((currentCrypto, i) => (
                            <Grid item key={i} xs={12} sm={6} lg={3} xl={3}>
                                <Crypto key={i} crypto={currentCrypto} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ) : "No Cryptocurrencies Found"}
        </div>
    )
}


export default CryptoGrid
import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'

const Crypto = (props) => {

    return (
        <div>
            { props.crypto ? (
                <Card>
                    <CardHeader
                    title={props.crypto.name}
                    />
                    <CardContent>
                        <Typography component="p">
                            Price: ${(Number(props.crypto.priceUsd)).toFixed(2)}
                        </Typography>
                        <Typography component="p">
                            Volume (24hr): ${(Number(props.crypto.priceUsd)).toFixed(8)}
                        </Typography>
                        <Typography component="p">
                            Change (24hr): {(Number(props.crypto.changePercent24Hr)).toFixed(2)}%
                        </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </div>
    )
}

export default Crypto
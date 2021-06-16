import React from 'react'
import { Typography } from '@material-ui/core'
import LogoStyle from './styles/LogoStyle'
const Logo = ()=>{
    const classes = LogoStyle()
    return <div className={classes.container}>
        <Typography className={classes.first}>Local</Typography>
        <Typography className={classes.second}>Business</Typography>
    </div>
}

export default Logo
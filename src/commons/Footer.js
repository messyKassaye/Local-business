import React from 'react'
import { Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
const Footer = ()=>{
    return <div style={{marginLeft:500,display:'flex',flexDirection:'row',alignItems:'center',color:grey[600]}}>
        <span>&#169;</span>
        {new Date().getFullYear()}
        <Typography style={{marginLeft:5}}>
            Local business
        </Typography>
    </div>
}

export default Footer
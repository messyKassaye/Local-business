import React, { useState } from 'react'
import HomePageStyle from '../styles/HomePageStyle'
import { Typography,IconButton } from '@material-ui/core'
const MenuWidget =(props)=>{
    const menu = props.menu
    const [selected,setSelected] = useState(1);

    const handleSelect = (id)=>{
        setSelected(id)
    }
    const classes = HomePageStyle()
    return <div className={classes.menuContainer}>
            <IconButton>
                {menu.icon}
            </IconButton>
            <Typography className={classes.label}>{menu.name}</Typography>
    </div>
}

export default MenuWidget
import React from 'react'
import HomePageStyle from '../home/styles/HomePageStyle'
import MenuWidget from '../home/widgets/MenuWidget'
import { AppBar,Toolbar,Divider } from '@material-ui/core'
import Logo from './Logo'
import { Menus } from '../home/Menu'
import { grey } from '@material-ui/core/colors'
const LocalBusinessAppBar = ()=>{
    const classes = HomePageStyle()
    return <AppBar elevation={0} className={classes.appBar}>
    <Toolbar>
        <Logo/>
        <div className={classes.grow}/>
        <div className={classes.growContainer}>
            {
                Menus.map(menu=>(
                    <MenuWidget menu={menu}></MenuWidget>
                ))
            }
        </div>
    </Toolbar>
    <Divider style={{backgroundColor:grey[400]}}/>
</AppBar>
}

export default LocalBusinessAppBar
import React from 'react'
import HomePageStyle from './styles/HomePageStyle'
import { AppBar, Toolbar,Typography,Divider} from '@material-ui/core'
import Logo from '../commons/Logo'
import { Menus } from './Menu'
import MenuWidget from './widgets/MenuWidget'
import { grey } from '@material-ui/core/colors'
import HomeRoutes from './HomeRoutes'
import Footer from '../commons/Footer'
import LocalBusinessAppBar from '../commons/LocalBusinessAppBar'
const HomePage = ()=>{
    const classes = HomePageStyle()
    return <div style={{display:'flex',flexDirection:'column'}}>
            <div className={classes.mainContainer}>
                <LocalBusinessAppBar/>
                <HomeRoutes/>
            </div>

            <div className={classes.footer}>
                <Footer/>
            </div>
    </div>
}

export default HomePage
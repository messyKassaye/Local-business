import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
export const HomePageStyle  = makeStyles((theme)=>({
    appBar:{
        backgroundColor:'transparent',
        height:50,
        display:'flex',
        flexDirection:'column'
    },
    mainContainer:{
        display:'flex',
        flexDirection:'column',
        flex:1,
        marginTop:75
    },
    footer:{
        bottom:0,
        position:'fixed'
    },
    grow:{
        display:'flex',
        flexDirection:'row',
        flexGrow:1
    },
    growContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    menuContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        cursor:'pointer',
        marginLeft:25,
        marginRight:25,
        
    },
    label:{
        color:'black',
        '&:hover':{
            color:'#28a745'
        }
    }
}))

export default HomePageStyle
import { makeStyles } from "@material-ui/core";
export const LogoStyle  = makeStyles((theme)=>({
    container:{
        display:'flex',
        flexDirection:'row'
    },
    first:{
        color:'#28a745',
        fontSize:20
    },
    second:{
        color:'#343a40',
        fontSize:20
    }
}))

export default LogoStyle
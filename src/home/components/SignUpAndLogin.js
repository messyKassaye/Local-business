import React, { useState } from 'react'
import { Typography,Button } from '@material-ui/core'
import SignUp from './SignUp';
import Login from './Login';
const SignUpAndLogin = ()=>{
    const [change,setChange] = useState(false);
    const [component,setComponent] = useState(1);

    const handleChange = (id)=>{
        setChange(true)
        setComponent(id)
    }
    return <div>
         {
             !change
             ?
                (
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:20}}>
                        <Typography variant={'h4'} style={{marginBottom:15}}>Hi there, Thank you for choosing us for your business</Typography>
                        <Typography>Login or Sign up now and get Review,Generate QR code and find hot leads for your business</Typography>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:25}}>
                            <Button 
                            onClick={()=>handleChange(1)}
                            color={'primary'} 
                            variant={'contained'} size="large" 
                            style={{paddingLeft:50,paddingRight:50}}>
                                Sign up
                            </Button>

                            <Button 
                            onClick={()=>handleChange(2)}
                            color={'primary'} 
                            variant={'text'} size="large" 
                            style={{paddingLeft:50,paddingRight:50,marginLeft:50}}>
                                Login
                            </Button>
                        </div>
                    </div>
                )
             :
                (
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        {
                            change&&component===1
                            ?
                                (<SignUp/>)
                            :
                                (
                                    <Login/>
                                )
                        }
                    </div>
                )
         }
    </div>
}

export default SignUpAndLogin
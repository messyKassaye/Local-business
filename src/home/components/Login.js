import React, { useState } from 'react'
import { AppBar,Card,CardHeader,CardContent,Divider,IconButton,Typography } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { grey } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import UseForm from '../../commons/UseForm';
import LoadingButton from '../../commons/LoadingButton';
import SignUpAndLoginstyle from '../styles/SignUpAndLoginStyle';
const Login = ()=>{
    const history = useHistory()
    const classes = SignUpAndLoginstyle()
    const [loading,setLoading] = useState(false)
    const [finished,setFinished] = useState(false)
    const [submitted,setSubmitted] = useState(false)
    const {inputs, handleInputChange} = UseForm({email:'',password:''}); 
    const loadingEnabled = !finished && loading;
    const isEnabled = inputs.email.length > 0 &&inputs.password.length>0

    const backToHome =()=>{
        history.push('/auth')
    }

    const handleSubmit =event=>{
        setLoading(true)
        setSubmitted(true)
    }
    return <Card style={{width:'50%'}} elevation={0}>
    <CardHeader
      title={"Login to your dashboard"}
      avatar={<IconButton onClick={()=>backToHome()}>
          <ArrowBackIosIcon color={'primary'}/>
      </IconButton>}
    />
    <Divider style={{backgroundColor:grey[500]}}/>
    <CardContent>
    <ValidatorForm
                className={classes.form}
                onSubmit={handleSubmit}
                >
                <TextValidator
                    className={classes.text_input}
                    variant={'outlined'}
                    label={'Email address'}
                    onChange={handleInputChange}
                    name="email"
                    type={'email'}
                    value={inputs.email}
                    validators={['required']}
                    errorMessages={['Please enter your email address']}
               />

                <TextValidator
                    className={classes.text_input}
                    variant={'outlined'}
                    label={'Password'}
                    onChange={handleInputChange}
                    name="password"
                    type={'password'}
                    value={inputs.password}
                    validators={['required']}
                    errorMessages={['Please enter your password']}
               />
               <LoadingButton
                            className={classes.text_input}
                            color="primary"
                            variant="contained"
                            type="submit"
                            text={'Login'}
                            disabled={!isEnabled || submitted}
                            loading={loadingEnabled}
                            done={finished}
                        >
                            {
                                'Login'
                            }
                    </LoadingButton>

    </ValidatorForm>
    </CardContent>
</Card>
}

export default Login
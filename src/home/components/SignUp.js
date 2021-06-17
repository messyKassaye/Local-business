import React, { useState } from 'react'
import { AppBar,Card,CardHeader,CardContent,Divider,IconButton,Typography } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { grey } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import UseForm from '../../commons/UseForm';
import SignUpAndLoginstyle from '../styles/SignUpAndLoginStyle';
import LoadingButton from '../../commons/LoadingButton';
const SignUp = ()=>{
    const history = useHistory();
    const classes = SignUpAndLoginstyle()
    const [loading,setLoading] = useState(false)
    const [finished,setFinished] = useState(false)
    const [submitted,setSubmitted] = useState(false)
    const {inputs, handleInputChange} = UseForm({first_name:'',last_name:'',email:'',password:''}); 
    const loadingEnabled = !finished && loading;
    const isEnabled = inputs.first_name.length > 0 && inputs.last_name.length > 0
                      &&inputs.email.length>0&&inputs.password.length>0

    const backToHome = ()=>{
        history.push('/auth')
        
    }

    const handleSubmit = event=>{
            setLoading(true)
            setSubmitted(true)
    }
    return <Card style={{width:'50%'}} elevation={0}>
            <CardHeader
              title={"Sign up to local business"}
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
                    label={'First name'}
                    onChange={handleInputChange}
                    name="first_name"
                    value={inputs.first_name}
                    validators={['required']}
                    errorMessages={['Please enter your first name']}
               />            
               <TextValidator
                    className={classes.text_input}
                    variant={'outlined'}
                    label={'Last name'}
                    onChange={handleInputChange}
                    name="last_name"
                    value={inputs.last_name}
                    validators={['required']}
                    errorMessages={['Please enter your last name']}
               />

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

export default SignUp
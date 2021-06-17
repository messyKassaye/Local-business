import React from 'react'
import SignUpAndLogin from './SignUpAndLogin'
import {isAuthenticated} from '../../TokenService'
const Home = ()=>{
    return <div>
        {
            isAuthenticated()?<span>hallowa</span>:<SignUpAndLogin/>
        }
    </div>
}

export default Home
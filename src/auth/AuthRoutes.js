import React from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import AuthDashboard from "./components/AuthDashboard";

const AuthRoutes =()=>{

    return (
        <Router>
            <Switch>
                <Route path='/auth' component={AuthDashboard}/>
            </Switch>
        </Router>
    )
}

export default AuthRoutes
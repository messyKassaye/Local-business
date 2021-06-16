import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import PrivateRoutes from "./PrivateRoute";
import Authenticated from "../auth/Authenticated";
import AuthenticatedRoute from "./AuthenticationRoute";
import App from "../App";
import HomePage from "../home/HomePage";

const Routes = ()=>{
    return (
        <Router>
            <Switch>
                <AuthenticatedRoute path={'/auth'} component={Authenticated}/>
                <PrivateRoutes path='/' component={HomePage}/>
            </Switch>
        </Router>
    );
}

export default Routes

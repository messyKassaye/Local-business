
import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './components/Home';

const HomeRoutes = ()=>{
    return <Switch>
    <Route path='/' component={Home} exact/>
</Switch>
}

export default HomeRoutes
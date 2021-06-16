import React, {Suspense} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Loading from "../helpers/Loading";
import AuthRoutes from './AuthRoutes'
 const Authenticated = ()=>{
        return (
            <Suspense fallback={<Loading/>}>
                <Router>
                <AuthRoutes/>
             </Router>
            </Suspense>
        )
}
export default Authenticated

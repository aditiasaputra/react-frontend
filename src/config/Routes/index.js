import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Main, Login, Register, Home } from '../../pages';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/">
                    <Main/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
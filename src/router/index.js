import React from 'react';
import Login from "../Login"
import SandBox from "../SandBox";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";

function IndexRouter(props) {
    return (
        <HashRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                {/*<Route path='/' exact component={SandBox}></Route>*/}
                <Route path='/' render={() =>
                    localStorage.getItem('token') ? <SandBox></SandBox> : <Redirect to='/login'/>
                }></Route>
            </Switch>
        </HashRouter>
    );
}

export default IndexRouter;

import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Home from "./Home";
import User from "./User";
import Roles from "./Roles";
import NoPression from "./403";

function SandBox(props) {
    return <>
        <Header></Header>
        <SideMenu></SideMenu>
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/user/list' component={User}></Route>
            <Route path='/role/list' component={Roles}></Route>
            <Redirect from='/' to='/home' />
            <Route path='*' component={NoPression}/>
        </Switch>
    </>
}

export default SandBox;

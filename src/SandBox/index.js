import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Home from "./Home";
import User from "./User";
import Roles from "./Roles";
import NoPression from "./403"

import './index.css'

import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import HeaderTop from "../components/Header";

function SandBox(props) {
    return <>
        <Layout>
            <SideMenu></SideMenu>
            <Layout className="site-layout">
                <HeaderTop></HeaderTop>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/user/list' component={User}></Route>
                    <Route path='/role/list' component={Roles}></Route>
                    <Redirect from='/' to='/home'/>
                    <Route path='*' component={NoPression}/>
                </Switch>
                </Content>
            </Layout>

        </Layout>
    </>
}

export default SandBox;

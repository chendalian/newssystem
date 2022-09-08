import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import SideMenu from "../components/SideMenu";
import Home from "./Home";
import User from "./User";
import Roles from "./Permissions/Role";
import NoPression from "./403"

import './index.css'

import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import HeaderTop from "../components/Header";
import Permission from "./Permissions/Permission";

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
                    <Route path='/user-manage/list' component={User}></Route>
                    <Route path='/right-manage/role/list' component={Roles}></Route>
                    <Route path='/right-manage/right/list' component={Permission}></Route>
                    <Redirect from='/' to='/home' exact/>
                    <Route path='*' component={NoPression}/>
                </Switch>
                </Content>
            </Layout>

        </Layout>
    </>
}

export default SandBox;

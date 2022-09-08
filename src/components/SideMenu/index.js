import React, {useEffect, useState} from 'react';
import Sider from "antd/es/layout/Sider";
import {Menu} from "antd";
import {UserOutlined} from '@ant-design/icons';

import {withRouter} from 'react-router-dom';


import './index.css'
import requests from "../../utils/http";
import {getMenu} from "../../api/home";

const {SubMenu, Item} = Menu

function SideMenu(props) {
    const [collapsed, setCollapsed] = useState(false);
    const [menuList, setMenuList] = useState([])


    useEffect(() => {
        getMenu().then(resp => {
            setMenuList(resp)
        })
    }, [])

    const renderMenu = (menu) => {
        return menu.map(item => {
            if (item.pagepermisson && item.children?.length>0) {
                return <SubMenu key={item.key} icon={item.icon} title={item.title}>
                    {renderMenu(item.children)}
                </SubMenu>
            }
            return item.pagepermisson && <Item key={item.key} icon={item.icon} onClick={() => {
                console.log('props', props)
                props.history.push(item.key)
            }}>{item.title}</Item>
        })
    }

    const selectedKeys=[props.location.pathname]
    const openKeys=["/"+props.location.pathname.split('/')[1]]
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
              <div className="logo">
                  <span>全球新闻发布系统</span>
              </div>
              <div style={{flex:1,overflow:"auto"}}>
                  <Menu
                      theme="dark"
                      mode="inline"
                      defaultSelectedKeys={selectedKeys}
                      defaultOpenKeys={openKeys}
                  >
                      {renderMenu(menuList)}
                  </Menu>
              </div>
          </div>
        </Sider>
    );
}

export default withRouter(SideMenu);  //高阶组件 withRouter  传低阶组件  从而让低阶组件拿到props

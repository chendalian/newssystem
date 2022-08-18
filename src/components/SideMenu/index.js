import React, {useState} from 'react';
import Sider from "antd/es/layout/Sider";
import {Menu} from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import './index.css'

const {SubMenu, Item} = Menu

function SideMenu(props) {
    const [collapsed, setCollapsed] = useState(false);

    //模拟数组结构
    const menuList = [
        {
            key: "/home",
            title: "首页",
            icon: <UserOutlined/>
        },
        {
            key: "/user-manage",
            title: "用户管理",
            icon: <UserOutlined/>,
            children: [
                {
                    key: "/user-manage/list",
                    title: "用户列表",
                    icon: <UserOutlined/>
                }
            ]
        },
        {
            key: "/right-manage",
            title: "权限管理",
            icon: <UserOutlined/>,
            children: [
                {
                    key: "/right-manage/role/list",
                    title: "角色列表",
                    icon: <UserOutlined/>
                },
                {
                    key: "/right-manage/right/list",
                    title: "权限列表",
                    icon: <UserOutlined/>
                }
            ]
        }
    ]

    const renderMenu = (menu) => {
        console.log('m', menu)
        menu.map(item => {
            if (item.children) {
                return <SubMenu key={item.key} icon={item.icon} title={item.title}>
                    {renderMenu(item)}
                </SubMenu>
            }
            return <Item key={item.key} icon={item.icon} title={item.title}></Item>
        })
    }

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">
                <span>全球新闻发布系统</span>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
            >
                {renderMenu(menuList)}
            </Menu>
        </Sider>
    );
}

export default SideMenu;

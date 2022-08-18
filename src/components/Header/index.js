import React, {useState} from 'react';
import {Header} from "antd/es/layout/layout";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';

import {Avatar, Dropdown, Menu, Space} from "antd";

function HeaderTop(props) {
    const [collapsed, setCollapsed] = useState(false);

    const changeVisible=()=>{
        setCollapsed(!collapsed)
    }

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                            1st menu item
                        </a>
                    ),
                },
            ]}
        />
    );

    return (
        <Header
            className="site-layout-background"
            style={{
                padding: '0 16px',
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
            }}
        >
            {
                collapsed?<MenuFoldOutlined onClick={changeVisible}/>:<MenuUnfoldOutlined onClick={changeVisible}/>
            }

            <div>
                <span style={{marginRight:'10px'}}>欢迎admin回来</span>
                <Dropdown overlay={menu}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </a>
                </Dropdown>
            </div>
        </Header>
    );
}

export default HeaderTop;

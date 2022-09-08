import React, {useEffect, useState} from 'react';
import {Button, Table, Tag} from "antd";
import {getPermission} from "../../../api/peimission";

function Permission(props) {
    const [data,setData]=useState([])
    const column=[
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: '权限名称',
            dataIndex: 'title',
        },
        {
            title: '权限路径',
            dataIndex: 'key',
            render:(key)=>{
                return <Tag color="orange">{key}</Tag>
            }

        },
        {
            title: '操作',
            render:()=>{
                return <div>
                    <Button type="primary">222</Button>
                    <Button type="primary" shape="circle" >222</Button>
                </div>
            }
        },
    ]

    useEffect(()=>{
        getPermission().then(resp=>{
            setData(resp)
        })
    },[])

    return (
        <Table dataSource={data} columns={column} />
    );
}

export default Permission;

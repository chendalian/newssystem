import React, {useEffect} from 'react';
import {Button} from "antd";
import requests from "../../utils/http";
import {getMenu} from "../../api/home";

function Home(props) {
    useEffect(()=>{
        // getMenu().then(resp=>{
        //     console.log('resp',resp)
        // })
    },[])

    return (
      <div>11</div>
    );
}

export default Home;

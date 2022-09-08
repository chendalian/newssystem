import axios from "axios";

const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api，不用你手写
    baseURL:'http://localhost:5000',
    //请求时间超过5秒
    timeout:5000
});

//请求拦截器:在发请求之前，请求拦截器可以检测到,可以在请求发出去之前做一些事情
requests.interceptors.request.use(config=>{
    let token=localStorage.getItem('token')
    token && (config.headers.Authoriztion=token)
    return config
},error=>{
    return Promise.reject(error)
})

//响应拦截器：包含两个函数（一个是成功返回的函数，一个是失败的返回的函数）
requests.interceptors.response.use(response=>{
    return response.data //将主体内容返回  axios.get().then(result=>{拿到的就是响应主体})
},error=>{
    let { response}=error
    // 如果有返回结果
    if(response){
        switch(response.status){
            //这里面根据公司需求进行写
            case 404:
                //进行错误跳转之类
                break;
        }
    }else{
        //服务器没有返回结果 分两种情况 断网  服务器崩了
        if(!window.navigator.onLine){
            //断网处理：跳转到断网页面
            return
        }
        return Promise.reject(error)
    }
})


//对外暴露requests(axios的二次封装)
export default requests;

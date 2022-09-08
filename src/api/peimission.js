import requests from "../utils/http";

const getPermission=()=>{
    return requests({
        url:'/rights',
    })
}

export {
    getPermission
}

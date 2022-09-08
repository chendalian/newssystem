import requests from "../utils/http";

const getMenu=()=>{
    return requests({
        url:'/rights?_embed=children',
    })
}

export {
    getMenu
}

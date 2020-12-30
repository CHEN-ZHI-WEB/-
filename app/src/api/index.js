import request from '../axios/request'
export function getList(data){
    return request({
        url:'/api/list',
        method:'post',
        data
    })
}

export function getDetail(data){
    return request({
        url:'/api/detail',
        method:'post',
        data
    })
}



export function getAdd(data){
    return request({
        url:'/api/add',
        method:'post',
        data
    })
}

export function getData(data){
    return request({
        url:'/api/data',
        method:'post',
        data
    })
}


export function getDetail2(data){
    console.log(data,"asdasdsad");
    return request({
        url:'/api/detail2',
        method:'post',
        data
    })
}

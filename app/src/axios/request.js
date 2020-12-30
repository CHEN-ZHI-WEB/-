import axios from 'axios'
function request (obj){
    let {
        headers,
        data={},
        params={},
        url="",
        method="get"
    }=obj
    return new Promise((resolve,reject)=>{
        axios({
            headers,
            data,
            params,
            url,
            method
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}
export default request
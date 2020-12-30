import mock from 'mockjs'

const data = mock.mock({
    'list|1-5':[{
        title:"@ctitle(8,12)",
        id:"@id",
        "children|3-5":[{
            info:'@ctitle(10,15)',
            file:"@image(100x100,@color)",
            background:"@color",
            id:"@id"
        }]
    }]
})
const data1 =  mock.mock({
    'list|10-20':[{
        title:"@cname(3,4)",
        id:"@id",
        img:"@image(100x100,@color)",
        "price|10-50":10
    }]
})

mock.mock('/api/list','post',(req)=>{
    return {
        code:"000",
        msg:"成功",
        data
    }
})

mock.mock('/api/detail','post',(req)=>{
    const {id} = JSON.parse(req.body)
    let newData = data.list.find(item=>item.id ===id)

    return{
        code:'0000',
        msg:'成功',
        data:newData
    }
})

mock.mock('/api/add',"post",(req)=>{
    const {id,info} = JSON.parse(req.body)
    let newList = data.list.forEach(item=>{
        if(item.id ===id){
            item.children.push(info)
        }
    })
    return {
        code:'0000',
        msg:'成功',
        data:newList
    }
})

mock.mock('/api/data',(req)=>{
    return {
        code:"0000",
        msg:'成功',
        data:data1.list
    }
})


mock.mock('/api/detail2','post',(req)=>{
    const {id} = JSON.parse(req.body)
    let newData = data1.list.find(item=>item.id ===id)

    return{
        code:'0000',
        msg:'成功',
        data:newData
    }
})
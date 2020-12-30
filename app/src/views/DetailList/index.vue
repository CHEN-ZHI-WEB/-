<template>
    <div>
        <dl>
            <dt><img :src="list.img" alt=""></dt>
            <dd>
                {{list.title}}
                {{list.price}}
            </dd>
        </dl>
    </div>
</template>

<script>
import { getDetail2 } from '../../api'
    export default {
        data () {
            return {
                list:{}
            }
        },
        created () {
            this.getlist()    
        },
        methods: {
            getlist(){
                console.log(this.$route.params);
                getDetail2({ ...this.$route.params }).then(res=>{
                    console.log(res);
                    this.list = res.data
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
dl{
    display: flex;
}
</style>
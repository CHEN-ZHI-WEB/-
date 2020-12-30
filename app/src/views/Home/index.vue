<template>
    <div class="home">
        <dl v-for="(item,index) in list" :key="index" @click="click(item)">
            <dt>
                <img :src="item.img" alt="">
            </dt>
            <dd>
                <p>{{item.title}}</p>
                <p>
                    {{item.price}}
                </p>
            </dd>
        </dl>
    </div>
</template>

<script>
import {getData} from '../../api/index'
    export default {
        name:'home',
        data () {
            return {
                list:[]
            }
        },
        created () {
            getData().then(res=>{
                console.log(res);
                this.list = res.data
            })
        },
        methods: {
            click(item){
                this.$router.push(`/detaillist/${item.id}`)
            }
        }
    }
</script>

<style lang="scss" scoped>
dl{
    display: flex;
}
</style>
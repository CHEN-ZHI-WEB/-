<template>
  <div class="add" :style="{ background: info.background || '#ccc' }">
    <van-field
      v-model="info.info"
      rows="2"
      autosize
      label="请输入内容"
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
      show-word-limit
    />
    <div class="imgs">
      <img :src="info.file" alt="" />
      <van-uploader :after-read="afterRead" />
    </div>
    <div class="big">
      <p>颜色</p>
      <ul>
        <li
          v-for="(item, index) in backList"
          :key="index"
          :style="{ background: item, height: '30px' }"
          @click="clickChange(item)"
        ></li>
      </ul>
    </div>
    <van-button :style="{ width: '100%' }" type="info" @click="clickTypeList"
      >预览</van-button
    >
    <van-button :style="{ width: '100%' }" type="info" @click="clickTypeAdd"
      >添加</van-button
    >
    <Dialog v-if="isShow" :info="info" @clickDialog="clickTypeList" />
    <van-popup v-model="show" :get-container="getContainer">
      <p v-for="(item,index) in listTwo" :key="index" @click='addList(item.id)'>
        {{item.title}}
      </p>
      </van-popup>
  </div>
</template>

<script>
import { getAdd, getList } from '../../api';
import Dialog from "../../components/dialog.vue";
export default {
  components: { Dialog },
  name: "add",
  data() {
    return {
      isShow: false,
      show:false,
      listTwo:[],
      info: {
        info: "",
        file: "",
        background: "",
      },
      backList: ["red", "green", "pink", "yellow", "orange", "#fff"],
    };
  },
  created() {
    this.getList()
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.info.file = file.content;
    },
    clickChange(item) {
      this.info.background = item;
    },
    clickTypeList() {
      this.isShow = !this.isShow;
    },
    clickTypeAdd() {
      this.show=!this.show
    },
    getList(){
        getList().then(res=>{
          this.listTwo = res.data.list
          console.log(this.listTwo);
        })
    },
    getContainer() {
      return document.querySelector(".add");
    },
    addList(id){
        getAdd({info:this.info,id:id}).then(res=>{
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.imgs {
  display: flex;
}
.imgs > img {
  height: 80px;
}
.add {
  width: 100%;
  height: 100%;
}
.big {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
li {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #000;
}
</style>
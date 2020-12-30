<template>
  <div class="detail">
    <h1>{{ list.title }}</h1>
    <p
      v-for="(item, index) in list.children"
      :key="index"
      @click="changeClick(item)"
    >
      {{ item.info }}
    </p>
    <Dialog v-if="isShow" :info="info" @clickDialog="dialogList"></Dialog>
  </div>
</template>

<script>
import Dialog from "../../components/dialog";
import { getDetail } from "../../api/index";
export default {
  components: { Dialog },
  name: "detail",
  data() {
    return {
      list: [],
      info: {},
      isShow: false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      console.log(this.$route.params);
      getDetail({ ...this.$route.params }).then((res) => {
        console.log(res);
        this.list = res.data;
        console.log(this.list);
      });
    },
    dialogList() {
      this.isShow = !this.isShow;
    },
    changeClick(item) {
      this.info = item;
      this.dialogList()
    },
  },
};
</script>

<style lang="scss" scoped>
.detail p {
  height: 30px;
  line-height: 30px;
}
</style>
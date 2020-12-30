<template>
  <div class="list">
    分类
    <p
      v-for="(item, index) in list"
      :key="index"
      class="pIndex"
      @click="clickChange(item)"
    >
      {{ item.title }}
    </p>
  </div>
</template>

<script>
import { getList } from "../../api";
export default {
  name: "list",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getList().then((res) => {
        this.list = res.data.list;
      });
    },
    clickChange(item) {
      this.$router.push(`/detail/${item.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.pIndex {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #000;
}
</style>
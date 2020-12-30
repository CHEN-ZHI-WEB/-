<template>
  <div class="dialog" :style="{ background: info.background || '#ccc' }">
    <h3 @click="clickDialog">关闭弹框X</h3>
    <div>
      {{ info.info }}
    </div>
    <img :src="info.file" alt="" />
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {};
  },
  created() {},
  methods: {
      clickDialog(){
          this.$emit("clickDialog")
      }
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #ccc;
}
img {
  width: 100%;
}
</style>
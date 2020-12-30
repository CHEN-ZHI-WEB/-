<template>
  <div class="layout">
    <main>
      <router-view />
    </main>
    <footer>
      <van-tabbar route>
        <van-tabbar-item replace to="/home" icon="home-o">主页</van-tabbar-item>
        <van-tabbar-item replace to="/add" icon="search">添加</van-tabbar-item>
        <van-tabbar-item replace to="/list" icon="search">列表</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  name: "layout",
};
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  flex-direction: column;
  height: 100%;
  display: flex;
}
main {
  flex: 1;
  overflow-y: auto;
  height: 100%;
}
footer {
  height: 50px;
  display: flex;
}
</style>
<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    bg-color="transparent">
    <el-menu-item index="0">
      <img style="width: 50px" src=".\assets\header_icon.png" alt="Map logo" />
    </el-menu-item>
    <el-menu-item index="1" style="font-size: 20px"> Tourist Map </el-menu-item>
    <el-sub-menu index="2" style="margin-left: auto">
      <template #title>Find us</template>
      <el-sub-menu index="2-1">
        <template #title>蔡宇喆</template>
        <el-menu-item index="2-1-1">电话：18285065399</el-menu-item>
        <el-menu-item index="2-2-2">微信：cosphilos</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2-2">
        <template #title>黄依乔</template>
        <el-menu-item index="2-2-1">电话：18507950621</el-menu-item>
        <el-menu-item index="2-2-2">微信：infinity_0621_</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2-3">
        <template #title>王可薇</template>
        <el-menu-item index="2-3-1">电话：17530159926</el-menu-item>
        <el-menu-item index="2-3-2">微信：qiqi01040656</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2-4">
        <template #title>钟亚伟</template>
        <el-menu-item index="2-4-1">电话：18879510931</el-menu-item>
        <el-menu-item index="2-4-2">微信：cosphilos</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
  <main class="all">
    <div class="wrapper">
      <el-scrollbar height="717px" tag="div">
        <RouterLink to="/" class="scrollbar-demo-item">首页</RouterLink>
        <RouterLink to="/hebei" class="scrollbar-demo-item">河北</RouterLink>
        <RouterLink to="/shanxi" class="scrollbar-demo-item">山西</RouterLink>
        <RouterLink to="/liaoning" class="scrollbar-demo-item">辽宁</RouterLink>
        <RouterLink to="/jilin" class="scrollbar-demo-item">吉林</RouterLink>
        <RouterLink to="/heilongjiang" class="scrollbar-demo-item">黑龙江</RouterLink>
        <RouterLink to="/jiangsu" class="scrollbar-demo-item">江苏</RouterLink>
        <RouterLink to="/zhejiang" class="scrollbar-demo-item">浙江</RouterLink>
        <RouterLink to="/anhui" class="scrollbar-demo-item">安徽</RouterLink>
        <RouterLink to="/fujian" class="scrollbar-demo-item">福建</RouterLink>
        <RouterLink to="/jiangxi" class="scrollbar-demo-item">江西</RouterLink>
        <RouterLink to="/shandong" class="scrollbar-demo-item">山东</RouterLink>
        <RouterLink to="/henan" class="scrollbar-demo-item">河南</RouterLink>
        <RouterLink to="/hubei" class="scrollbar-demo-item">湖北</RouterLink>
        <RouterLink to="/hunan" class="scrollbar-demo-item">湖南</RouterLink>
        <RouterLink to="/guangdong" class="scrollbar-demo-item">广东</RouterLink>
        <RouterLink to="/hainan" class="scrollbar-demo-item">海南</RouterLink>
        <RouterLink to="/sichuan" class="scrollbar-demo-item">四川</RouterLink>
        <RouterLink to="/guizhou" class="scrollbar-demo-item">贵州</RouterLink>
        <RouterLink to="/yunnan" class="scrollbar-demo-item">云南</RouterLink>
        <RouterLink to="/shaanxi" class="scrollbar-demo-item">陕西</RouterLink>
        <RouterLink to="/gansu" class="scrollbar-demo-item">甘肃</RouterLink>
        <RouterLink to="/qinghai" class="scrollbar-demo-item">青海</RouterLink>
        <RouterLink to="/taiwan" class="scrollbar-demo-item">台湾</RouterLink>
        <RouterLink to="/neimenggu" class="scrollbar-demo-item">内蒙古</RouterLink>
        <RouterLink to="/guangxi" class="scrollbar-demo-item">广西</RouterLink>
        <RouterLink to="/xizang" class="scrollbar-demo-item">西藏</RouterLink>
        <RouterLink to="/ningxia" class="scrollbar-demo-item">宁夏</RouterLink>
        <RouterLink to="/xinjiang" class="scrollbar-demo-item">新疆</RouterLink>
        <RouterLink to="/beijing" class="scrollbar-demo-item">北京</RouterLink>
        <RouterLink to="/tianjin" class="scrollbar-demo-item">天津</RouterLink>
        <RouterLink to="/shanghai" class="scrollbar-demo-item">上海</RouterLink>
        <RouterLink to="/chongqing" class="scrollbar-demo-item">重庆</RouterLink>
        <RouterLink to="/xianggang" class="scrollbar-demo-item">香港</RouterLink>
        <RouterLink to="/aomen" class="scrollbar-demo-item">澳门</RouterLink>
      </el-scrollbar>
    </div>
    <div>
      <RouterView />
    </div>
    <div id="map"></div>
    <div class="province-info" id="provinceInfo"></div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.wrapper {
  height: 717px;
}
.all {
  display: grid;
  grid-template-columns: 1fr 10fr;
  padding: 0 2rem;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  color: var(--color-text);
}

.el-menu {
  background-color: #f7f7f7;
}
</style>

<style>
#map {
  height: 700px;
  width: 100%;
  margin: 0 auto;
  border: none;
  /* 去掉地图容器边框 */
  box-shadow: none;
  /* 去掉地图容器阴影 */
}

.province-info {
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
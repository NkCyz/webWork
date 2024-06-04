<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <ul class="list">
        <li><RouterLink to="/">首页</RouterLink></li>
        <li><RouterLink to="/hebei">河北</RouterLink></li>
        <li><RouterLink to="/shanxi">山西</RouterLink></li>
        <li><RouterLink to="/liaoning">辽宁</RouterLink></li>
        <li><RouterLink to="/jilin">吉林</RouterLink></li>
        <li><RouterLink to="/heilongjiang">黑龙江</RouterLink></li>
        <li><RouterLink to="/jiangsu">江苏</RouterLink></li>
        <li><RouterLink to="/zhejiang">浙江</RouterLink></li>
        <li><RouterLink to="/anhui">安徽</RouterLink></li>
        <li><RouterLink to="/fujian">福建</RouterLink></li>
        <li><RouterLink to="/jiangxi">江西</RouterLink></li>
        <li><RouterLink to="/shandong">山东</RouterLink></li>
        <li><RouterLink to="/henan">河南</RouterLink></li>
        <li><RouterLink to="/hubei">湖北</RouterLink></li>
        <li><RouterLink to="/hunan">湖南</RouterLink></li>
        <li><RouterLink to="/guangdong">广东</RouterLink></li>
        <li><RouterLink to="/hainan">海南</RouterLink></li>
        <li><RouterLink to="/sichuan">四川</RouterLink></li>
        <li><RouterLink to="/guizhou">贵州</RouterLink></li>
        <li><RouterLink to="/yunnan">云南</RouterLink></li>
        <li><RouterLink to="/shaanxi">陕西</RouterLink></li>
        <li><RouterLink to="/gansu">甘肃</RouterLink></li>
        <li><RouterLink to="/qinghai">青海</RouterLink></li>
        <li><RouterLink to="/taiwan">台湾</RouterLink></li>
        <li><RouterLink to="/neimenggu">内蒙古</RouterLink></li>
        <li><RouterLink to="/guangxi">广西</RouterLink></li>
        <li><RouterLink to="/xizang">西藏</RouterLink></li>
        <li><RouterLink to="/ningxia">宁夏</RouterLink></li>
        <li><RouterLink to="/xinjiang">新疆</RouterLink></li>
        <li><RouterLink to="/beijing">北京</RouterLink></li>
        <li><RouterLink to="/tianjin">天津</RouterLink></li>
        <li><RouterLink to="/shanghai">上海</RouterLink></li>
        <li><RouterLink to="/chongqing">重庆</RouterLink></li>
        <li><RouterLink to="/xianggang">香港</RouterLink></li>
        <li><RouterLink to="/aomen">澳门</RouterLink></li>
      </ul>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
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

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

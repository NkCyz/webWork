
<script setup></script>

<template>
  <main>
    <section class="intro">
      <h1>欢迎来到北京</h1>
      <p>远赴京城，一睹人间盛世，奔赴一场属于中国人的浪漫。</p>
    </section>
    <section class="culture">
      <h2>文化</h2>
      <p>北京历史悠久，它作为城市的历史可以追溯到3000年前。秦汉以来，北京地区一直是中国北方的重镇，
        名称先后称为蓟城、燕都、燕京、大都、北平、顺天府等。北京与西安、南京、洛阳并称中国“四大古都”，
        拥有6项世界遗产，具有重要的国际影响力，也是世界上最大的城市之一 。</p>
    </section>
    <section class="attractions">
      <h2>景点</h2>
      <ul>
        <li>天安门</li>
        <li>故宫</li>
        <li>颐和园</li>
        <li>八达岭长城</li>
      </ul>
    </section>
    <section class="food">
      <h2>美食</h2>
      <p>北京作为中国的首都，拥有悠久的历史和丰富的美食文化。这座城市聚集了来自全国各地的人们，形成了多元的口味和独特的风味。让我们一起来探索北京的冬季传统美食吧！</p>
      
    </section>
  </main>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  color: #333;
  margin: 0;
  padding: 0;
}

main {
  width: 1050px;
  margin: 150px;
  padding: 80px;
  margin-top: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5em;
  color: #b22222;
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8em;
  color: #b22222;
  border-bottom: 2px solid #b22222;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

p {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
}

ul {
  list-style-type: square;
  padding-left: 20px;
}

ul li {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 10px;
}

.intro {
  text-align: center;
  margin-bottom: 40px;
}

.intro p {
  font-size: 1.2em;
  font-weight: bold;
}

section {
  margin-bottom: 30px;
}
</style>




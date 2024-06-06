<script setup></script>

<template>
  <main>
    <section class="intro">
      <h1>欢迎来到福建</h1>
      <p>海声与山色的共鸣，繁华与文艺的交错</p>
    </section>
    <section class="culture">
      <h2>文化</h2>
      <p>福建的历史，是一部民族文化的传承史。福建的文化底蕴深厚，无论是古代的闽南文化、客家文化，
        还是现代的闽南语歌曲、木偶戏等，都是福建文化的瑰宝。福建的文化，既体现在其丰富的物质文化遗产上，也体现在其独特的非物质文化遗产上。</p>
    </section>
    <section class="attractions">
      <h2>景点</h2>
      <ul>
        <li>武夷山</li>
        <li>三坊七巷</li>
        <li>鼓浪屿</li>
        <li>湄洲岛</li>
      </ul>
    </section>
    <section class="food">
      <h2>美食</h2>
      <p>“佛闻弃禅跳墙来，闽地美食香气开。鱼丸舞动如鱼游，闽菜精髓尽呈现，尝味福地醉心梦。”</p>
      <img src="..\assets\FUJIAN\图片1.jpg" width="400" height="500" >
      <img src="..\assets\FUJIAN\图片2.jpg" width="400" height="500" >
      <img src="..\assets\FUJIAN\图片3.jpg" width="400" height="500" >
      <img src="..\assets\FUJIAN\图片4.jpg" width="400" height="500" >
      <img src="..\assets\FUJIAN\图片5.jpg" width="400" height="500" >
      <img src="..\assets\FUJIAN\图片6.jpg" width="400" height="500" >
      <img src="..\assets\FUJIAN\图片7.jpg" width="400" height="500" >
      <img src="..\assets\FUJIAN\图片8.jpg" width="400" height="500" >
      <img src="..\assets\FUJIAN\图片9.jpg" width="400" height="500" >
      <img src="..\assets\FUJIAN\图片10.jpg" width="400" height="500" >
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

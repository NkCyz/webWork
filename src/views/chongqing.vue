<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到重庆</h1>
        <p>山水重庆，热情之城。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          重庆，位于中国西南部，是一座充满活力和独特魅力的城市，拥有悠久的历史和丰富的文化。作为长江上游的重要城市，重庆自古以来就是商贸往来的重要枢纽，也是巴蜀文化的发源地之一。重庆的文化底蕴深厚，融合了巴渝、汉、滇、黔等多种文化元素，形成了独特的山水人文风情。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>洪崖洞</li>
          <li>三峡博物馆</li>
          <li>解放碑步行街</li>
          <li>金佛山</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          重庆美食，麻辣鲜香，烧烤火锅，滋味无穷。辣子鸡、火锅、毛血旺、串串香，每一道都是舌尖上的风味狂欢，让你的味蕾尽情畅游于重庆的独特风情之中。来重庆，品味不一样的火辣人生。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\ChongQing\CQ- (1).jpg" width="400" height="500" />
            <img src="..\assets\ChongQing\CQ- (2).jpg" width="400" height="500" />
            <img src="..\assets\ChongQing\CQ- (3).jpg" width="400" height="500" />
            <img src="..\assets\ChongQing\CQ- (4).jpg" width="400" height="500" />
            <img src="..\assets\ChongQing\CQ- (5).jpg" width="400" height="500" />
            <img src="..\assets\ChongQing\CQ- (6).jpg" width="400" height="500" />
            <img src="..\assets\ChongQing\CQ- (7).jpg" width="400" height="500" />
            <img src="..\assets\ChongQing\CQ- (8).jpg" width="400" height="500" />
            <img src="..\assets\ChongQing\CQ- (9).jpg" width="400" height="500" />
            <img src="..\assets\ChongQing\CQ- (10).jpg" width="400" height="500" />
          </div>
        </el-scrollbar>
      </section>
    </el-scrollbar>
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
  margin-left: 75px;
  margin-right: 75px;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 0px;
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

.flex_bar {
  display: flex;
}
</style>

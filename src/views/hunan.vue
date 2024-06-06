<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
      <section class="intro">
        <h1>欢迎来到湖南</h1>
        <p>潇湘烟雨，湘水情深。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          湖南省位于中国中南部，素有“鱼米之乡”的美誉。湖南历史悠久，自古以来就是文化和经济的重地。作为楚文化的重要发源地，湖南在历史长河中积淀了丰富的文化遗产。毛泽东、刘少奇等一代伟人皆出自湖南，成为中国现代历史的重要人物。湖南境内的岳麓书院、南岳衡山、以及千年学府等文化景点，彰显了湖南深厚的历史文化底蕴。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>岳麓山岳麓书院</li>
          <li>张家界国家森林公园</li>
          <li>凤凰古城</li>
          <li>南岳衡山</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>舌尖上的湘味，火辣的湘情。剁椒鱼头的鲜香、毛氏红烧肉的酥嫩、臭豆腐的独特风味，让你一尝倾心。地道的湖南美食带你体验浓郁的风味和火辣的激情，每一口都是对湘味的深情告白。</p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\HuNan\HN- (1).jpg" width="400" height="500">
            <img src="..\assets\HuNan\HN- (2).jpg" width="400" height="500">
            <img src="..\assets\HuNan\HN- (3).jpg" width="400" height="500">
            <img src="..\assets\HuNan\HN- (4).jpg" width="400" height="500">
            <img src="..\assets\HuNan\HN- (5).jpg" width="400" height="500">
            <img src="..\assets\HuNan\HN- (6).jpg" width="400" height="500">
            <img src="..\assets\HuNan\HN- (7).jpg" width="400" height="500">
            <img src="..\assets\HuNan\HN- (8).jpg" width="400" height="500">
            <img src="..\assets\HuNan\HN- (9).jpg" width="400" height="500">
            <img src="..\assets\HuNan\HN- (10).jpg" width="400" height="500">
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

.flex_bar {
  display: flex;
}
</style>
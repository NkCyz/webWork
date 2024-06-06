<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
      <section class="intro">
        <h1>欢迎来到台湾</h1>
        <p>宝岛台湾，人间仙境。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          台湾位于中国东南沿海，是中国的一块重要岛屿，也是一个多元文化的交汇地。台湾的历史文化底蕴深厚，既有原住民文化，又有汉族、客家、闽南等多个民族的文化遗产。台湾自17世纪以来，先后被荷兰、西班牙、明清等多个国家统治，各种文化元素在这里相互交融，形成了丰富多彩的台湾文化。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>日月潭</li>
          <li>九份老街</li>
          <li>台北故宫</li>
          <li>高雄爱河</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>台湾美食，鲜香可口，风味独特。小吃、夜市、台式料理、台湾茶，每一样都是对台湾风味的完美呈现，让你在舌尖上感受到来自宝岛的美味与幸福。品尝台湾，品味一份精致与热情。</p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\TaiWan\TW- (1).jpg" width="400" height="500">
            <img src="..\assets\TaiWan\TW- (2).jpg" width="400" height="500">
            <img src="..\assets\TaiWan\TW- (3).jpg" width="400" height="500">
            <img src="..\assets\TaiWan\TW- (4).jpg" width="400" height="500">
            <img src="..\assets\TaiWan\TW- (5).jpg" width="400" height="500">
            <img src="..\assets\TaiWan\TW- (6).jpg" width="400" height="500">
            <img src="..\assets\TaiWan\TW- (7).jpg" width="400" height="500">
            <img src="..\assets\TaiWan\TW- (8).jpg" width="400" height="500">
            <img src="..\assets\TaiWan\TW- (9).jpg" width="400" height="500">
            <img src="..\assets\TaiWan\TW- (10).jpg" width="400" height="500">
          </div>
        </el-scrollbar>
      </section>
    </el-scrollbar>

  </main>
</template>

<style TWoped>
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
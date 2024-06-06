<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
      <section class="intro">
        <h1>欢迎来到宁夏</h1>
        <p>黄河之滨，沙漠明珠。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          宁夏位于中国西北，毗邻内蒙古自治区，是黄河上游的重要流域之一。宁夏历史悠久，是古丝绸之路的重要节点，也是多民族文化的交汇地带。宁夏是回族的主要聚居地之一，回族文化是宁夏的主要文化特色之一，体现在建筑、饮食、语言、民俗等方面。此外，宁夏还拥有丰富的历史遗迹和文化景观，如西夏王陵、银川南湖、沙湖等。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>银川西夏王陵</li>
          <li>中卫沙湖</li>
          <li>固原黄河风情园</li>
          <li>银川南湖公园</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>宁夏美食，滋味无穷，回味无穷。羊肉泡馍、手抓羊肉、涮羊肉、宁夏拉面，每一道都散发着浓郁的宁夏风情，让你在舌尖上感受到丝丝回荡的美食记忆。品味宁夏，品味黄河畔的美好滋味。</p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\NingXia\NX- (1).jpg" width="400" height="500">
            <img src="..\assets\NingXia\NX- (2).jpg" width="400" height="500">
            <img src="..\assets\NingXia\NX- (3).jpg" width="400" height="500">
            <img src="..\assets\NingXia\NX- (4).jpg" width="400" height="500">
            <img src="..\assets\NingXia\NX- (5).jpg" width="400" height="500">
            <img src="..\assets\NingXia\NX- (6).jpg" width="400" height="500">
            <img src="..\assets\NingXia\NX- (7).jpg" width="400" height="500">
            <img src="..\assets\NingXia\NX- (8).jpg" width="400" height="500">
            <img src="..\assets\NingXia\NX- (9).jpg" width="400" height="500">
            <img src="..\assets\NingXia\NX- (10).jpg" width="400" height="500">
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
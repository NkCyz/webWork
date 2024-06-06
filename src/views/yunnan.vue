<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
      <section class="intro">
        <h1>欢迎来到云南</h1>
        <p>彩云之南，风情万种。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          云南，位于中国西南边陲，是一个多民族聚居的地区，也是中国的一个少数民族自治区。云南拥有丰富多彩的文化，融合了汉族、彝族、傣族、白族等多个民族的文化特色，形成了独特的云南文化。云南历史悠久，是古代丝绸之路的重要通道之一，也是中印文化交流的重要枢纽之一。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>丽江古城</li>
          <li>石林景区</li>
          <li>西双版纳植物园</li>
          <li>泸沽湖</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>云南美食，鲜香四溢，风味独特。过桥米线、汽锅鸡、火腿粑粑、酸菜鱼，每一道都是对云南风味的完美展现，让你在舌尖上尽情感受云南的多姿多彩。来云南，品味一场风情万种的美食之旅。</p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\YunNan\YN- (1).jpg" width="400" height="500">
            <img src="..\assets\YunNan\YN- (2).jpg" width="400" height="500">
            <img src="..\assets\YunNan\YN- (3).jpg" width="400" height="500">
            <img src="..\assets\YunNan\YN- (4).jpg" width="400" height="500">
            <img src="..\assets\YunNan\YN- (5).jpg" width="400" height="500">
            <img src="..\assets\YunNan\YN- (6).jpg" width="400" height="500">
            <img src="..\assets\YunNan\YN- (7).jpg" width="400" height="500">
            <img src="..\assets\YunNan\YN- (8).jpg" width="400" height="500">
            <img src="..\assets\YunNan\YN- (9).jpg" width="400" height="500">
            <img src="..\assets\YunNan\YN- (10).jpg" width="400" height="500">
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
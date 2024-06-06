<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到广东</h1>
        <p>珠江明珠，粤海风情。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          广东位于中国南部，是中国历史文化的重要发源地之一，也是改革开放的前沿之地。广东自古以来就是对外交流的重要门户，悠久的历史孕育了丰富多彩的文化底蕴。岭南文化的形成，使广东成为华夏文明的重要组成部分之一。粤剧、韩美林、岭南画派等独具特色的文化形态，展现了广东深厚的文化底蕴。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>广州塔</li>
          <li>韶关丹霞山</li>
          <li>潮州广济桥</li>
          <li>深圳欢乐海岸</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          广东美食，鲜美诱人，百菜百味。广东烧腊、港式点心、茶餐厅、潮汕牛肉火锅，每一道都是精湛技艺和新鲜食材的结合，让你在每一口中品尝到地道的粤式风味。探索广东，享受一场舌尖上的美食盛宴。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\GuangDong\GD- (1).jpg" width="400" height="500" />
            <img src="..\assets\GuangDong\GD- (2).jpg" width="400" height="500" />
            <img src="..\assets\GuangDong\GD- (3).jpg" width="400" height="500" />
            <img src="..\assets\GuangDong\GD- (4).jpg" width="400" height="500" />
            <img src="..\assets\GuangDong\GD- (5).jpg" width="400" height="500" />
            <img src="..\assets\GuangDong\GD- (6).jpg" width="400" height="500" />
            <img src="..\assets\GuangDong\GD- (7).jpg" width="400" height="500" />
            <img src="..\assets\GuangDong\GD- (8).jpg" width="400" height="500" />
            <img src="..\assets\GuangDong\GD- (9).jpg" width="400" height="500" />
            <img src="..\assets\GuangDong\GD- (10).jpg" width="400" height="500" />
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

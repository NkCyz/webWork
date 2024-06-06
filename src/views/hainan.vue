<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
      <section class="intro">
        <h1>欢迎来到海南</h1>
        <p>热带风情，椰风海韵。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          海南岛，位于中国南海南部，是中国最大的热带岛屿，也是中国的热带旅游胜地。海南拥有悠久的历史和丰富的文化底蕴，是多民族和睦共处的地区之一。海南是海南黎族自治县的所在地，海南黎族文化源远流长，与海南的热带气候、美丽海岛相得益彰，形成了独特的海南文化景观。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>三亚亚龙湾</li>
          <li>海口世纪大桥</li>
          <li>万宁石梅湾</li>
          <li>儋州白鹿洞书院</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>海南美食，鲜香四溢，热辣诱人。椰子鸡、海南鸡饭、文昌鸡、海南椰子糖，每一道都是对海南热带风情的完美演绎，让你在舌尖上尽情享受海南的独特风味。来海南，一嚼便是热带海韵的美妙之旅。</p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\HaiNan\HN- (1).jpg" width="400" height="500">
            <img src="..\assets\HaiNan\HN- (2).jpg" width="400" height="500">
            <img src="..\assets\HaiNan\HN- (3).jpg" width="400" height="500">
            <img src="..\assets\HaiNan\HN- (4).jpg" width="400" height="500">
            <img src="..\assets\HaiNan\HN- (5).jpg" width="400" height="500">
            <img src="..\assets\HaiNan\HN- (6).jpg" width="400" height="500">
            <img src="..\assets\HaiNan\HN- (7).jpg" width="400" height="500">
            <img src="..\assets\HaiNan\HN- (8).jpg" width="400" height="500">
            <img src="..\assets\HaiNan\HN- (9).jpg" width="400" height="500">
            <img src="..\assets\HaiNan\HN- (10).jpg" width="400" height="500">
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
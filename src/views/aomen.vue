<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
      <section class="intro">
        <h1>欢迎来到澳门</h1>
        <p>濠江韵味，东西交汇。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          澳门，位于中国南部珠江口西侧，既是一个现代化的城市，又有着深厚的历史文化底蕴。自16世纪起，澳门成为东西方文化交流的重要窗口，葡萄牙人在这里留下了独特的建筑风格和丰富的文化遗产。澳门的中西融合不仅体现在建筑和宗教上，还渗透在生活的方方面面。澳门历史城区被联合国教科文组织列为世界文化遗产，展示了这一独特的历史积淀。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>大三巴牌坊</li>
          <li>妈阁庙</li>
          <li>澳门渔人码头</li>
          <li>路环岛</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>澳门美食，舌尖上的世界旅行。葡式蛋挞的香甜、猪扒包的酥脆、杏仁饼的醇厚，还有独特的澳门葡国菜，让你在每一口中感受东西方美食文化的完美融合。品味澳门，让味蕾体验一场与众不同的环球美食之旅。</p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\AoMen\AM- (1).jpg" width="400" height="500">
            <img src="..\assets\AoMen\AM- (2).jpg" width="400" height="500">
            <img src="..\assets\AoMen\AM- (3).jpg" width="400" height="500">
            <img src="..\assets\AoMen\AM- (4).jpg" width="400" height="500">
            <img src="..\assets\AoMen\AM- (5).jpg" width="400" height="500">
            <img src="..\assets\AoMen\AM- (6).jpg" width="400" height="500">
            <img src="..\assets\AoMen\AM- (7).jpg" width="400" height="500">
            <img src="..\assets\AoMen\AM- (8).jpg" width="400" height="500">
            <img src="..\assets\AoMen\AM- (9).jpg" width="400" height="500">
            <img src="..\assets\AoMen\AM- (10).jpg" width="400" height="500">
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
<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到新疆</h1>
        <p>风吹草原，雪洒塔城。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          新疆位于中国西北部，是中国的五个自治区之一，也是多民族和谐共处的地区之一。新疆历史悠久，是古代丝绸之路的重要通道之一，曾是东西方文化交流的重要枢纽。新疆拥有丰富多彩的文化，包括维吾尔族、哈萨克族、汉族等多个民族的文化，这些文化在这片土地上相互交融、共同发展，形成了独特而丰富的新疆文化。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>喀纳斯湖</li>
          <li>天山天池</li>
          <li>布尔津五彩滩</li>
          <li>喀拉峻大草原</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          新疆美食，独具特色，香飘万里。烤全羊、手抓羊排、大盘鸡、拉面，每一道都是对新疆风味的完美演绎，让你在每一口中尽情领略草原之上的独特魅力。品味新疆，品味一种草原情怀。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\XinJiang\XJ- (1).jpg" width="400" height="500" />
            <img src="..\assets\XinJiang\XJ- (2).jpg" width="400" height="500" />
            <img src="..\assets\XinJiang\XJ- (3).jpg" width="400" height="500" />
            <img src="..\assets\XinJiang\XJ- (4).jpg" width="400" height="500" />
            <img src="..\assets\XinJiang\XJ- (5).jpg" width="400" height="500" />
            <img src="..\assets\XinJiang\XJ- (6).jpg" width="400" height="500" />
            <img src="..\assets\XinJiang\XJ- (7).jpg" width="400" height="500" />
            <img src="..\assets\XinJiang\XJ- (8).jpg" width="400" height="500" />
            <img src="..\assets\XinJiang\XJ- (9).jpg" width="400" height="500" />
            <img src="..\assets\XinJiang\XJ- (10).jpg" width="400" height="500" />
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

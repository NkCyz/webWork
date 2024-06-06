<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到甘肃</h1>
        <p>沙漠绿洲，丝路之魂。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          甘肃位于中国西北部，是中国历史上重要的文化发祥地之一，也是丝绸之路的重要节点。甘肃拥有丰富的历史文化遗产，古代丝绸之路的驿站、长城、莫高窟等众多文化景点见证了古代丝路贸易的繁荣。甘肃文化融合了汉、藏、回等多个民族的文化特色，形成了独具魅力的多元文化景观。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>莫高窟</li>
          <li>敦煌莫高窟飞天</li>
          <li>马蹄寺</li>
          <li>嘉峪关</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          甘肃美食，沉淀千年，风味独特。羊肉串、牛肉面、手抓饼、甘南牛肉面，每一道都是对甘肃独特风味的诠释，让你在舌尖上感受历史的厚重和文化的丰富。品味甘肃，品味丝路文化的绵延与传承。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\GanSu\GS- (1).jpg" width="400" height="500" />
            <img src="..\assets\GanSu\GS- (2).jpg" width="400" height="500" />
            <img src="..\assets\GanSu\GS- (3).jpg" width="400" height="500" />
            <img src="..\assets\GanSu\GS- (4).jpg" width="400" height="500" />
            <img src="..\assets\GanSu\GS- (5).jpg" width="400" height="500" />
            <img src="..\assets\GanSu\GS- (6).jpg" width="400" height="500" />
            <img src="..\assets\GanSu\GS- (7).jpg" width="400" height="500" />
            <img src="..\assets\GanSu\GS- (8).jpg" width="400" height="500" />
            <img src="..\assets\GanSu\GS- (9).jpg" width="400" height="500" />
            <img src="..\assets\GanSu\GS- (10).jpg" width="400" height="500" />
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

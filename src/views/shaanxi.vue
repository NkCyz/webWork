<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到陕西</h1>
        <p>古都陕西，历史之魂。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          陕西位于中国西北部，是中华文明的发祥地之一，也是中国历史上的重要文化中心。陕西拥有丰富的历史文化遗产，是中国古代十大文明古都之一，有着众多的历史名胜和文化景点。西安作为古都长安，曾是13个朝代的都城，留下了大量珍贵的历史遗迹和文化景观，如兵马俑、大雁塔等。陕西还是丝绸之路的重要节点，是古代东西方文化交流的重要窗口之一。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>兵马俑</li>
          <li>大雁塔</li>
          <li>华清池</li>
          <li>西安城墙</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          陕西美食，千年味道，唇齿留香。肉夹馍、油泼面、凉皮、羊肉泡馍，每一道都是对陕西丰厚历史和独特风情的呈现，让你在每一口中尽情感受千年文化的独特魅力。来陕西，品味历史的美食传承。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\ShaanXi\SX- (1).jpg" width="400" height="500" />
            <img src="..\assets\ShaanXi\SX- (2).jpg" width="400" height="500" />
            <img src="..\assets\ShaanXi\SX- (3).jpg" width="400" height="500" />
            <img src="..\assets\ShaanXi\SX- (4).jpg" width="400" height="500" />
            <img src="..\assets\ShaanXi\SX- (5).jpg" width="400" height="500" />
            <img src="..\assets\ShaanXi\SX- (6).jpg" width="400" height="500" />
            <img src="..\assets\ShaanXi\SX- (7).jpg" width="400" height="500" />
            <img src="..\assets\ShaanXi\SX- (8).jpg" width="400" height="500" />
            <img src="..\assets\ShaanXi\SX- (9).jpg" width="400" height="500" />
            <img src="..\assets\ShaanXi\SX- (10).jpg" width="400" height="500" />
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

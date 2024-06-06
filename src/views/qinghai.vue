<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到青海</h1>
        <p>高原明珠，碧水蓝天。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          青海位于中国西北部，是中国的少数民族自治区之一，也是中国西北地区的重要省份。青海拥有悠久的历史和丰富多彩的文化。青海是藏族、回族、土族等多个民族的聚居地，这些民族文化在这片土地上交相辉映，形成了独特的多元文化景观。青海还是丝绸之路的重要通道之一，历史上曾是中外文化交流的重要场所之一。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>青海湖</li>
          <li>茶卡盐湖</li>
          <li>敦煌莫高窟</li>
          <li>鸟岛</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          青海美食，天高海阔，鲜美无边。青海牛肉面、酥油茶、青稞酒、青海湖鲜鱼，每一道都是对青海高原风情的独特诠释，让你在舌尖上感受到独特的草原情怀。来青海，品味一场高原美食之旅。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\QingHai\QH- (1).jpg" width="400" height="500" />
            <img src="..\assets\QingHai\QH- (2).jpg" width="400" height="500" />
            <img src="..\assets\QingHai\QH- (3).jpg" width="400" height="500" />
            <img src="..\assets\QingHai\QH- (4).jpg" width="400" height="500" />
            <img src="..\assets\QingHai\QH- (5).jpg" width="400" height="500" />
            <img src="..\assets\QingHai\QH- (6).jpg" width="400" height="500" />
            <img src="..\assets\QingHai\QH- (7).jpg" width="400" height="500" />
            <img src="..\assets\QingHai\QH- (8).jpg" width="400" height="500" />
            <img src="..\assets\QingHai\QH- (9).jpg" width="400" height="500" />
            <img src="..\assets\QingHai\QH- (10).jpg" width="400" height="500" />
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

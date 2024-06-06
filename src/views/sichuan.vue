<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
      <section class="intro">
        <h1>欢迎来到四川</h1>
        <p>天府之国，美食之都。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          四川位于中国西南部，素有“天府之国”之称，是中国历史文化名省之一。四川拥有悠久灿烂的历史，是古代蜀文化的发源地，也是中国西南地区的文化中心之一。四川文化以成都平原为核心，融合了巴蜀、蜀汉、藏羌等多种文化元素，形成了独具特色的川西文化。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>峨眉山</li>
          <li>九寨沟</li>
          <li>成都武侯祠</li>
          <li>都江堰</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>四川美食，麻辣鲜香，口福无穷。火锅、麻辣香锅、回锅肉、水煮鱼，每一道都是对四川独特风味的完美诠释，让你在舌尖上尽情享受麻辣鲜香的滋味。来四川，品味一场麻辣风情的美食盛宴。</p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\SiChuan\SC- (1).jpg" width="400" height="500">
            <img src="..\assets\SiChuan\SC- (2).jpg" width="400" height="500">
            <img src="..\assets\SiChuan\SC- (3).jpg" width="400" height="500">
            <img src="..\assets\SiChuan\SC- (4).jpg" width="400" height="500">
            <img src="..\assets\SiChuan\SC- (5).jpg" width="400" height="500">
            <img src="..\assets\SiChuan\SC- (6).jpg" width="400" height="500">
            <img src="..\assets\SiChuan\SC- (7).jpg" width="400" height="500">
            <img src="..\assets\SiChuan\SC- (8).jpg" width="400" height="500">
            <img src="..\assets\SiChuan\SC- (9).jpg" width="400" height="500">
            <img src="..\assets\SiChuan\SC- (10).jpg" width="400" height="500">
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
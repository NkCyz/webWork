<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到河北</h1>
        <p>这么近那么美，周末到河北。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          立于群山之巅极目远眺，仿佛落入大自然铺就的宏伟画廊，巍然燕山、层峦叠嶂，渤海之滨，海鸥翱翔，坝上高原，草甸绵长，淀泊风光，碧波荡漾。自然挥毫泼墨精心排布，将课本上的地理名词浓缩在这一方。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>承德避暑山庄</li>
          <li>丰宁坝上草原</li>
          <li>秦皇岛-北戴河</li>
          <li>狼牙山</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          河北，紧邻着首都北京，算得上是“天子脚下”，但存在感似乎并不高。连带着河北的各种特色美食也一个比一个低调。河北的美食虽说低调，可千万不能小看，个个都独具特色，
          且美味自成一派。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\HEBEI\HB- (1).jpg" width="400" height="500" />
            <img src="..\assets\HEBEI\HB- (2).jpg" width="400" height="500" />
            <img src="..\assets\HEBEI\HB- (3).jpg" width="400" height="500" />
            <img src="..\assets\HEBEI\HB- (4).jpg" width="400" height="500" />
            <img src="..\assets\HEBEI\HB- (5).jpg" width="400" height="500" />
            <img src="..\assets\HEBEI\HB- (6).jpg" width="400" height="500" />
            <img src="..\assets\HEBEI\HB- (7).jpg" width="400" height="500" />
            <img src="..\assets\HEBEI\HB- (8).jpg" width="400" height="500" />
            <img src="..\assets\HEBEI\HB- (9).jpg" width="400" height="500" />
            <img src="..\assets\HEBEI\HB- (10).jpg" width="400" height="500" />
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

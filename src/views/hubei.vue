<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到湖北</h1>
        <p>楚韵荆风，江汉情长。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          湖北省地处中国中部，历史悠久，文化底蕴深厚。作为古代楚国的发源地之一，湖北孕育了灿烂的楚文化。自古以来，湖北便是长江文明的重要组成部分，荆楚大地上留下了许多历史遗迹和文化瑰宝。武汉作为九省通衢，更是自古以来的商业重镇和交通枢纽。无论是古老的黄鹤楼，还是闻名遐迩的武当山，湖北的历史文化遗产都令人叹为观止。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>武汉黄鹤楼</li>
          <li>武当山</li>
          <li>神农架</li>
          <li>三峡大坝</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          品味湖北，舌尖上的荆楚——热干面、豆皮、武昌鱼、荆州鱼糕，让每一口都充满浓郁的地方风味，感受从江汉平原到大别山的美食传奇。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\HuBei\HB- (1).jpg" width="400" height="500" />
            <img src="..\assets\HuBei\HB- (2).jpg" width="400" height="500" />
            <img src="..\assets\HuBei\HB- (3).jpg" width="400" height="500" />
            <img src="..\assets\HuBei\HB- (4).jpg" width="400" height="500" />
            <img src="..\assets\HuBei\HB- (5).jpg" width="400" height="500" />
            <img src="..\assets\HuBei\HB- (6).jpg" width="400" height="500" />
            <img src="..\assets\HuBei\HB- (7).jpg" width="400" height="500" />
            <img src="..\assets\HuBei\HB- (8).jpg" width="400" height="500" />
            <img src="..\assets\HuBei\HB- (9).jpg" width="400" height="500" />
            <img src="..\assets\HuBei\HB- (10).jpg" width="400" height="500" />
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

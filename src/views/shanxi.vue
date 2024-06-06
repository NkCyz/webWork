<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到山西</h1>
        <p>山西——华夏之华，表里山河</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          黎民之雀跃曾经地广人稀的土地上，智慧在一刹那苏醒，留下一笔繁华。山西是片异彩纷呈的地域，既有古踪可寻，又有高山可攀，佛光庇护下尽显宁泰安康。
          来自于民间的建筑杰作让皇室慨叹，在不经意的一瞬，便将恣肆奔腾的黄河扼于壶口。山西，因地貌而声名大振，因历史而让人流连……
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>五台山</li>
          <li>云冈石窟</li>
          <li>晋祠</li>
          <li>平遥古城</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          要说山西的美食，面是绕不过去的，“天下面食，尽在三晋”，山西面食从远古走向今天，也从黄土高原走向全国，走向世界。山西面食，不仅是中华民族饮食文化中的重要组成部分，也是世界饮食文化中的一朵奇葩。
          一面多样，一面百味
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\SHANXI\SX- (1).jpg" width="400" height="500" />
            <img src="..\assets\SHANXI\SX- (2).jpg" width="400" height="500" />
            <img src="..\assets\SHANXI\SX- (3).jpg" width="400" height="500" />
            <img src="..\assets\SHANXI\SX- (4).jpg" width="400" height="500" />
            <img src="..\assets\SHANXI\SX- (5).jpg" width="400" height="500" />
            <img src="..\assets\SHANXI\SX- (6).jpg" width="400" height="500" />
            <img src="..\assets\SHANXI\SX- (7).jpg" width="400" height="500" />
            <img src="..\assets\SHANXI\SX- (8).jpg" width="400" height="500" />
            <img src="..\assets\SHANXI\SX- (9).jpg" width="400" height="500" />
            <img src="..\assets\SHANXI\SX- (10).jpg" width="400" height="500" />
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

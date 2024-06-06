<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到安徽</h1>
        <p>徽州烟雨醉江南，皖山皖水情无限。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          安徽省地处华东地区，跨越了中国的南方与北方。长江与淮河两条水系，将安徽分成了皖南、皖中和皖北，黄山傲立在皖南山地之中。省会合肥坐落在全省的中心，皖北平原则孕育出了中国的百亿粮仓。
          安徽，身跨南北。合肥，一省山川名胜，多元文化环抱的地理中心，没有不可撼动的传统羁绊，任由新时代的探索者开荒拓土。在乡土宁静的安徽，跳动着一个朝气蓬勃的心脏。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>黄山风景区</li>
          <li>宏村古镇</li>
          <li>徽州古城</li>
          <li>翡翠谷</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          寻味安徽，皖南徽菜的咸鲜醇正，沿江美食的清淡可口，皖中美味的融合鼎新，皖北面食的朴实深厚。走遍市井街巷，用舌尖丈量安徽，解锁多元的皖美饮食文化；嗨吃皖美味道，
          用味道了解地域风情。安徽的美食带着分明的地域烟火气，讲述着地道风味的丰富多彩。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\ANHUI\AH- (6).jpg" width="400" height="500" />
            <img src="..\assets\ANHUI\AH- (7).jpg" width="400" height="500" />
            <img src="..\assets\ANHUI\AH- (8).jpg" width="400" height="500" />
            <img src="..\assets\ANHUI\AH- (9).jpg" width="400" height="500" />
            <img src="..\assets\ANHUI\AH- (10).jpg" width="400" height="500" />
            <img src="..\assets\ANHUI\AH- (1).jpg" width="400" height="500" />
            <img src="..\assets\ANHUI\AH- (2).jpg" width="400" height="500" />
            <img src="..\assets\ANHUI\AH- (3).jpg" width="400" height="500" />
            <img src="..\assets\ANHUI\AH- (4).jpg" width="400" height="500" />
            <img src="..\assets\ANHUI\AH- (5).jpg" width="400" height="500" />
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

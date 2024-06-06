<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
    <section class="intro">
      <h1>欢迎来到吉林</h1>
      <p>神州启明处，龙脉连天际。</p>
    </section>
    <section class="culture">
      <h2>文化</h2>
      <p>凛冽巍峨的长白山下，流水处，
        万树含烟，抬头望，冰瀑挂川。
        水在云之上，云在风之巅。
        时而化为雾，时而羽成仙。
        有人说它是西王 母的宝镜，守护一方平安；
        有人坚信它是女娲补天的宝石，遗落凡间。
        仿佛只有这样，
        才能解释这星球罕有的惊艳。</p>
    </section>
    <section class="attractions">
      <h2>景点</h2>
      <ul>
        <li>长白山风景区</li>
        <li>伪满皇宫博物馆</li>
        <li>延吉朝鲜族民宿馆</li>
        <li>长春民俗博物馆</li>
      </ul>
    </section>
    <section class="food">
      <h2>美食</h2>
      <p>吉林市的美食绝对让你大饱口福！首先，特色类的小吃比较多，比如煎粉，鸡汤干豆腐，朝鲜族风味的炒年糕，其次，
        东北菜当中的吉林菜，乌拉火锅，白肉血肠，清蒸白鱼， 吉林菜特色可以概括为：善制野味、讲究火候、醇厚香浓、朴素实惠。</p>
        <el-scrollbar >
        <div class="flex_bar">
          <img src="..\assets\JILIN\JL- (1).jpg" width="400" height="500" >
      <img src="..\assets\JILIN\JL- (2).jpg" width="400" height="500" >
      <img src="..\assets\JILIN\JL- (3).jpg" width="400" height="500" >
      <img src="..\assets\JILIN\JL- (4).jpg" width="400" height="500" >
      <img src="..\assets\JILIN\JL- (5).jpg" width="400" height="500" >
      <img src="..\assets\JILIN\JL- (6).jpg" width="400" height="500" >
      <img src="..\assets\JILIN\JL- (7).jpg" width="400" height="500" >
      <img src="..\assets\JILIN\JL- (8).jpg" width="400" height="500" >
      <img src="..\assets\JILIN\JL- (9).jpg" width="400" height="500" >
      <img src="..\assets\JILIN\JL- (10).jpg" width="400" height="500" >
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
  margin-left:75px;
  margin-right: 75px;
  padding-left: 40px;
  padding-right:40px;
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
.flex_bar{
  display:flex;
}
</style>

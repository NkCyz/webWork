<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
    <section class="intro">
      <h1>欢迎来到江西</h1>
      <p>豫章故郡，九州同一，浔阳江头，枫叶荻花，窑火不息，茶瓷交织，庐陵晓月，临川才子。</p>
    </section>
    <section class="culture">
      <h2>文化</h2>
      <p>古色绵长的江西
          物华天宝，人杰地灵
          实为江南昌盛之地，文章节义之邦
          红色激荡的江西
          巍巍井岗、赳赳南昌
          红色激荡、浩气绵长
          点燃新中国成立燎原之光
          绿色悠扬的江西
          物产丰盛，鸟鸣山幽
          明净秀美，碧波荡漾
          在这片融古色、红色、绿色于一体的赣鄱大地
          地域的基因决定了江西机要工作在此萌生茁壮
          开启披荆斩棘、沐风栉雨的征程</p>
    </section>
    <section class="attractions">
      <h2>景点</h2>
      <ul>
        <li>滕王阁</li>
        <li>井冈山</li>
        <li>鄱阳湖</li>
        <li>庐山</li>
      </ul>
    </section>
    <section class="food">
      <h2>美食</h2>
      <p>江西菜又称为赣菜，大致分为鄱阳湖、南昌、赣南三派，口味上各有差异，鄱阳湖讲求原汁原味，赣南则重咸、重辣，南昌口味偏辣。江西菜少有隆重的大菜或精致的小炒，朴实、家常，
        是江西菜最大的特色。</p>
        <el-scrollbar >
        <div class="flex_bar">

        </div>
        </el-scrollbar>
      <img src="..\assets\JIANGXI\JX- (1).jpg" width="400" height="500" >
      <img src="..\assets\JIANGXI\JX- (2).jpg" width="400" height="500" >
      <img src="..\assets\JIANGXI\JX- (3).jpg" width="400" height="500" >
      <img src="..\assets\JIANGXI\JX- (4).jpg" width="400" height="500" >
      <img src="..\assets\JIANGXI\JX- (5).jpg" width="400" height="500" >
      <img src="..\assets\JIANGXI\JX- (6).jpg" width="400" height="500" >
      <img src="..\assets\JIANGXI\JX- (7).jpg" width="400" height="500" >
      <img src="..\assets\JIANGXI\JX- (8).jpg" width="400" height="500" >
      <img src="..\assets\JIANGXI\JX- (9).jpg" width="400" height="500" >
      <img src="..\assets\JIANGXI\JX- (10).jpg" width="400" height="500" >
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

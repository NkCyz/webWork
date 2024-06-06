<script setup></script>

<template>
  <main>

    <el-scrollbar height="717px" tag="div">
    <section class="intro">
      <h1>欢迎来到河南</h1>
      <p>老家河南，一个来了都说中的地方!</p>
    </section>
    <section class="culture">
      <h2>文化</h2>
      <p>一卷河南志，半部中国史! 从仰韶文化点燃中华文明第一缕曙光，到青铜器揭开商周时代的神秘面纱，再到秦汉帝国大一统的完成和唐宋经济文化助推中华文明达到历史时期的巅峰，
        王朝、都城、文字、文物等华夏文明的各类载体和结晶，成为支撑五千多年中华文明起源、形成、发展并延绵至今的物质和精神坐标。</p>

    </section>
    <section class="attractions">
      <h2>景点</h2>
      <ul>
        <li>少林寺</li>
        <li>龙门石窟</li>
        <li>嵩山</li>
        <li>开封府</li>
      </ul>
    </section>
    <section class="food">
      <h2>美食</h2>

      <p>当提及中国美食之都，河南省无疑是一个不可忽视的地方。位于中原腹地的这片土地，凭借着其丰富的历史文化底蕴和独特的地理优势，孕育出了无数令人垂涎欲滴的美食珍馐。</p>
      <el-scrollbar >
        <div class="flex_bar">
          <img src="..\assets\HENAN\HN- (1).jpg" width="400" height="500" >
      <img src="..\assets\HENAN\HN- (2).jpg" width="400" height="500" >
      <img src="..\assets\HENAN\HN- (3).jpg" width="400" height="500" >
      <img src="..\assets\HENAN\HN- (4).jpg" width="400" height="500" >
      <img src="..\assets\HENAN\HN- (5).jpg" width="400" height="500" >
      <img src="..\assets\HENAN\HN- (6).jpg" width="400" height="500" >
      <img src="..\assets\HENAN\HN- (7).jpg" width="400" height="500" >
      <img src="..\assets\HENAN\HN- (8).jpg" width="400" height="500" >
      <img src="..\assets\HENAN\HN- (9).jpg" width="400" height="500" >
      <img src="..\assets\HENAN\HN- (10).jpg" width="400" height="500" >
        </div>
        </el-scrollbar>
      
      <img src="..\assets\HENAN\图片1.jpg" width="400" height="500" >
      <img src="..\assets\HENAN\图片2.jpg" width="400" height="500" >
      <img src="..\assets\HENAN\图片3.jpg" width="400" height="500" >
      <img src="..\assets\HENAN\图片4.jpg" width="400" height="500" >
      <img src="..\assets\HENAN\图片5.jpg" width="400" height="500" >
      <img src="..\assets\HENAN\图片6.jpg" width="400" height="500" >
      <img src="..\assets\HENAN\图片7.jpg" width="400" height="500" >
      <img src="..\assets\HENAN\图片8.jpg" width="400" height="500" >
      <img src="..\assets\HENAN\图片9.jpg" width="400" height="500" >
      <img src="..\assets\HENAN\图片10.jpg" width="400" height="500" >
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
=
.flex_bar{
  display:flex;
}
</style>

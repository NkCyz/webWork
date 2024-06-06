<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
    <section class="intro">
      <h1>欢迎来到天津</h1>
      <p>天津，一座古老而富有活力的城市，它如同一位智者，凝聚着悠久的历史和繁华的现代。</p>
    </section>
    <section class="culture">
      <h2>文化</h2>
      <p>天津，自古便是北方的门户，更是南北交通的枢纽，自古便是北方的门户。这里曾涌现出无数历史名人，如近代的梁启超、严复，他们的思想照亮了中国的近代化之路；更有近代实业家张之洞、
        文学家冯骥才等，他们的足迹遍布天津的大街小巷，为这座城市增添了无尽的文化底蕴。天津人热情好客，民俗风情独特。从茶馆的相声表演，到街头巷尾的民间艺术，都让人感受到这座城市独特的文化气息。
        在这里，你可以品味到浓郁的北方风情，感受到天津人民的热情与活力。</p>
    </section>
    <section class="attractions">
      <h2>景点</h2>
      <ul>
        <li>五大道</li>
        <li>意大利风情区</li>
        <li>世纪钟</li>
        <li>天津之眼</li>
      </ul>
    </section>
    <section class="food">
      <h2>美食</h2>
      <p>津菜，源自天津，是天津地方特色的烹饪流派，它以海鲜为主，兼收并蓄，融合了北方的粗犷和南方的细腻，形成了独特的风味。</p>
      <el-scrollbar >
        <div class="flex_bar">
          <img src="..\assets\TIANJIN\TJ- (1).jpg" width="400" height="500" >
      <img src="..\assets\TIANJIN\TJ- (2).jpg" width="400" height="500" >
      <img src="..\assets\TIANJIN\TJ- (3).jpg" width="400" height="500" >
      <img src="..\assets\TIANJIN\TJ- (4).jpg" width="400" height="500" >
      <img src="..\assets\TIANJIN\TJ- (5).jpg" width="400" height="500" >
      <img src="..\assets\TIANJIN\TJ- (6).jpg" width="400" height="500" >
      <img src="..\assets\TIANJIN\TJ- (7).jpg" width="400" height="500" >
      <img src="..\assets\TIANJIN\TJ- (8).jpg" width="400" height="500" >
      <img src="..\assets\TIANJIN\TJ- (9).jpg" width="400" height="500" >
      <img src="..\assets\TIANJIN\TJ- (10).jpg" width="400" height="500" >
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

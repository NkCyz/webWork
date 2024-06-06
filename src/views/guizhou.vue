<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
      <section class="intro">
        <h1>欢迎来到贵州</h1>
        <p>千山万水，黔韵之美。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          贵州地处中国西南，拥有悠久灿烂的历史文化，是多民族和睦相处的地区之一。贵州是苗族、侗族、布依族等多个少数民族的聚居地，这些民族文化与汉族文化融合交融，形成了多元而丰富的文化景观。贵州的喀斯特地貌、彝族建筑、苗族服饰等独具特色，展示了贵州独特的自然风光和人文景观。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>黄果树瀑布</li>
          <li>荔波小七孔</li>
          <li>贵阳青岩古镇</li>
          <li>贵阳花溪公园</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>贵州美食，山珍海味，诱人多彩。酸汤鱼、黔菜、毛血旺、酸汤粉，每一道都是对贵州丰富风味的诠释，让你在舌尖上感受到独特的酸辣鲜香，品味山水之间的美食文化。漫步贵州，品尝一番异域风情。</p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\GuiZhou\GZ- (1).jpg" width="400" height="500">
            <img src="..\assets\GuiZhou\GZ- (2).jpg" width="400" height="500">
            <img src="..\assets\GuiZhou\GZ- (3).jpg" width="400" height="500">
            <img src="..\assets\GuiZhou\GZ- (4).jpg" width="400" height="500">
            <img src="..\assets\GuiZhou\GZ- (5).jpg" width="400" height="500">
            <img src="..\assets\GuiZhou\GZ- (6).jpg" width="400" height="500">
            <img src="..\assets\GuiZhou\GZ- (7).jpg" width="400" height="500">
            <img src="..\assets\GuiZhou\GZ- (8).jpg" width="400" height="500">
            <img src="..\assets\GuiZhou\GZ- (9).jpg" width="400" height="500">
            <img src="..\assets\GuiZhou\GZ- (10).jpg" width="400" height="500">
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
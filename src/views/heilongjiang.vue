<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
    <section class="intro">
      <h1>欢迎来到黑龙江</h1>
      <p>雄鸡之冠，便是黑龙江。我曾以为这里是冬最钟情的地方，直到真正踏上这片土地，才明白四季都在这里热烈绽放。</p>
    </section>
    <section class="culture">
      <h2>文化</h2>
      <p>100多年来，肥沃的黑土地曾涌现出许多时代契机，直到今天，人们仍然相信，这片土地蕴藏的潜力，在哈尔滨脚下，是一条生机勃勃的东北亚经济走廊，这座城市涌动着奋进的渴望，也寄托着一个国家对合作共赢的向往。</p>
    </section>
    <section class="attractions">
      <h2>景点</h2>
      <ul>
        <li>哈尔滨</li>
        <li>齐齐哈尔</li>
        <li>黑河</li>
        <li>小兴安岭</li>
      </ul>
    </section>
    <section class="food">
      <h2>美食</h2>
      <p>黑龙江位于中国最东北部，是亚洲与太平洋地区陆路通往俄罗斯远东和欧洲大陆的重要通道，黑龙江不仅各种自然资源丰富，其中的特色美食和小吃也数不胜数。</p>
      <el-scrollbar >
        <div class="flex_bar">
          <img src="..\assets\HEILONGJIANG\HLJ- (1).jpg" width="400" height="500" >
      <img src="..\assets\HEILONGJIANG\HLJ- (2).jpg" width="400" height="500" >
      <img src="..\assets\HEILONGJIANG\HLJ- (3).jpg" width="400" height="500" >
      <img src="..\assets\HEILONGJIANG\HLJ- (4).jpg" width="400" height="500" >
      <img src="..\assets\HEILONGJIANG\HLJ- (5).jpg" width="400" height="500" >
      <img src="..\assets\HEILONGJIANG\HLJ- (6).jpg" width="400" height="500" >
      <img src="..\assets\HEILONGJIANG\HLJ- (7).jpg" width="400" height="500" >
      <img src="..\assets\HEILONGJIANG\HLJ- (8).jpg" width="400" height="500" >
      <img src="..\assets\HEILONGJIANG\HLJ- (9).jpg" width="400" height="500" >
      <img src="..\assets\HEILONGJIANG\HLJ- (10).jpg" width="400" height="500" >
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

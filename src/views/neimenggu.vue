<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
    <section class="intro">
      <h1>欢迎来到内蒙古</h1>
      <p>一眼醉 听颜色说浪漫 看自然述衷肠 
        沙漠|草原|湖泊|雪山|曲水|暮色|星辰 
        多彩北疆-极致之美！</p>
    </section>
    <section class="culture">
      <h2>文化</h2>
      <p>在大兴安岭脚下，领略春天的色彩；走过夏季的草原，寻找秋日的异域风情；告别冬季的落叶松，去往草原深处，感受一场激情澎湃的雪地狂欢。
        马背上的民族，以骁勇为盾牌，以荣誉为信仰，在天地之间，尽情驰骋。</p>
    </section>
    <section class="attractions">
      <h2>景点</h2>
      <ul>
        <li>大召寺</li>
        <li>塞上老街</li>
        <li>锡林郭勒草原</li>
        <li>呼伦贝尔大草原</li>
      </ul>
    </section>
    <section class="food">
      <h2>美食</h2>
      <p>内蒙古自治区，这片广袤的草原大地，是中国北方著名的旅游胜地，也是一个拥有丰富美食文化的地区。内蒙古美食以其独特的风味和丰富的品种，
        吸引着来自世界各地的游客和美食爱好者。</p>
        <el-scrollbar >
        <div class="flex_bar">
          <img src="..\assets\NEIMENGGU\NMG- (1).jpg" width="400" height="500" >
      <img src="..\assets\NEIMENGGU\NMG- (2).jpg" width="400" height="500" >
      <img src="..\assets\NEIMENGGU\NMG- (3).jpg" width="400" height="500" >
      <img src="..\assets\NEIMENGGU\NMG- (4).jpg" width="400" height="500" >
      <img src="..\assets\NEIMENGGU\NMG- (5).jpg" width="400" height="500" >
      <img src="..\assets\NEIMENGGU\NMG- (6).jpg" width="400" height="500" >
      <img src="..\assets\NEIMENGGU\NMG- (7).jpg" width="400" height="500" >
      <img src="..\assets\NEIMENGGU\NMG- (8).jpg" width="400" height="500" >
      <img src="..\assets\NEIMENGGU\NMG- (9).jpg" width="400" height="500" >
      <img src="..\assets\NEIMENGGU\NMG- (10).jpg" width="400" height="500" >
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

<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到江苏</h1>
        <p>水韵江苏——有你会更美</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>江苏省的非遗项目种类繁多，反映了该地区的传统文化和民族风情。</p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>南京</li>
          <li>苏州</li>
          <li>徐州</li>
          <li>扬州</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          江苏菜系味道清鲜，选料讲究，刀工精细，咸中稍甜，造型也特色鲜明。由于江浙地区气候潮湿，又靠近沿海，厨师往往会在菜中增加糖分，以去除湿气，并且很少放辣椒，避免上火。
          江苏的历代名厨为苏菜创造出丰富多样的佳肴，尤其苏州、淮安、扬州一带，可说是是名厨美馔的摇篮。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\JIANGSU\JS- (1).jpg" width="400" height="500" />
            <img src="..\assets\JIANGSU\JS- (2).jpg" width="400" height="500" />
            <img src="..\assets\JIANGSU\JS- (3).jpg" width="400" height="500" />
            <img src="..\assets\JIANGSU\JS- (4).jpg" width="400" height="500" />
            <img src="..\assets\JIANGSU\JS- (7).jpg" width="400" height="500" />
            <img src="..\assets\JIANGSU\JS- (8).jpg" width="400" height="500" />
            <img src="..\assets\JIANGSU\JS- (9).jpg" width="400" height="500" />
            <img src="..\assets\JIANGSU\JS- (10).jpg" width="400" height="500" />
            <img src="..\assets\JIANGSU\JS- (5).jpg" width="400" height="500" />
            <img src="..\assets\JIANGSU\JS- (6).jpg" width="400" height="500" />
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

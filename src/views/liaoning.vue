<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到辽宁</h1>
        <p>山海有情，天辽地宁。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          中华民族在五千年的历史发展中， 创造和留下了灿烂辉煌、丰富多彩的文化遗产。
          辽宁非物质文化遗产内容丰富、 形式多样、异彩纷呈， 具有鲜明的民族民间特色
          和强烈的时代特色。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>沈阳故宫</li>
          <li>大连</li>
          <li>葫芦岛</li>
          <li>雷锋纪念馆</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          辽宁省位于中国东北地区，这里的菜肴以其丰富的海陆资源和独特的地域特色，形成了独具一格的烹饪风格。在这片土地上，
          历史和文化的熏陶赋予了辽宁菜系独特的魅力，使其成为中国烹饪文化的重要组成部分。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\LIAONING\LN- (1).jpg" width="400" height="500" />
            <img src="..\assets\LIAONING\LN- (2).jpg" width="400" height="500" />
            <img src="..\assets\LIAONING\LN- (3).jpg" width="400" height="500" />
            <img src="..\assets\LIAONING\LN- (4).jpg" width="400" height="500" />
            <img src="..\assets\LIAONING\LN- (5).jpg" width="400" height="500" />
            <img src="..\assets\LIAONING\LN- (6).jpg" width="400" height="500" />
            <img src="..\assets\LIAONING\LN- (7).jpg" width="400" height="500" />
            <img src="..\assets\LIAONING\LN- (8).jpg" width="400" height="500" />
            <img src="..\assets\LIAONING\LN- (9).jpg" width="400" height="500" />
            <img src="..\assets\LIAONING\LN- (10).jpg" width="400" height="500" />
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

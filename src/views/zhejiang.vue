<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到浙江</h1>
        <p>山水和文化相遇注定是一个没有结局的故事！</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          依河的老街，古朴的石板路，幽深的弄堂，凝重的台门，错落有致的翻轩骑楼，仿佛这就是浙江水乡的最直白的描述。
          但那些隐藏在骨子里，最悠闲、最富贵的气质，却怎么也无法遮住。这就是浙江啊，这个古朴而宁静的地方，自有一种繁华。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>杭州</li>
          <li>普陀山</li>
          <li>绍兴</li>
          <li>横店影视城</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          浙菜：简称“浙菜”，起源于新石器时代的河姆渡文化，经越国先民的开拓积累，汉唐时期的成熟定型，宋元时期的繁荣和明清时期的发展，浙江菜的基本风格已经形成。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\ZHEJIANG\ZJ- (10).jpg" width="400" height="500" />
            <img src="..\assets\ZHEJIANG\ZJ- (1).jpg" width="400" height="500" />
            <img src="..\assets\ZHEJIANG\ZJ- (2).jpg" width="400" height="500" />
            <img src="..\assets\ZHEJIANG\ZJ- (3).jpg" width="400" height="500" />
            <img src="..\assets\ZHEJIANG\ZJ- (4).jpg" width="400" height="500" />
            <img src="..\assets\ZHEJIANG\ZJ- (5).jpg" width="400" height="500" />
            <img src="..\assets\ZHEJIANG\ZJ- (6).jpg" width="400" height="500" />
            <img src="..\assets\ZHEJIANG\ZJ- (7).jpg" width="400" height="500" />
            <img src="..\assets\ZHEJIANG\ZJ- (8).jpg" width="400" height="500" />
            <img src="..\assets\ZHEJIANG\ZJ- (9).jpg" width="400" height="500" />
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

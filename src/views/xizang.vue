<script setup></script>

<template>
  <main>
    <el-scrollbar height="800" tag="div">
      <section class="intro">
        <h1>欢迎来到西藏</h1>
        <p>雪域高原，心灵净土。</p>
      </section>
      <section class="culture">
        <h2>文化</h2>
        <p>
          西藏，位于中国西南边陲，是中国的一个自治区，也是世界上最高的地区之一。西藏是世界上著名的佛教圣地之一，拥有深厚的宗教信仰和独特的藏传佛教文化。此外，西藏还保留着丰富的原始藏族文化，如唐卡绘画、藏族舞蹈、藏族建筑等，展现了西藏独特的文化魅力。
        </p>
      </section>
      <section class="attractions">
        <h2>景点</h2>
        <ul>
          <li>布达拉宫</li>
          <li>珠峰</li>
          <li>拉萨大昭寺</li>
          <li>林芝雅鲁藏布江大峡谷</li>
        </ul>
      </section>
      <section class="food">
        <h2>美食</h2>
        <p>
          西藏美食，清香满溢，心灵之味。酥油茶、青稞酒、藏香肠、酥油糌粑，每一道都是对西藏高原风情的完美诠释，让你在舌尖上感受到青藏高原的纯净与美好。品味西藏，品味一场心灵的净化之旅。
        </p>
        <el-scrollbar>
          <div class="flex_bar">
            <img src="..\assets\XiZang\XZ- (1).jpg" width="400" height="500" />
            <img src="..\assets\XiZang\XZ- (2).jpg" width="400" height="500" />
            <img src="..\assets\XiZang\XZ- (3).jpg" width="400" height="500" />
            <img src="..\assets\XiZang\XZ- (4).jpg" width="400" height="500" />
            <img src="..\assets\XiZang\XZ- (5).jpg" width="400" height="500" />
            <img src="..\assets\XiZang\XZ- (6).jpg" width="400" height="500" />
            <img src="..\assets\XiZang\XZ- (7).jpg" width="400" height="500" />
            <img src="..\assets\XiZang\XZ- (8).jpg" width="400" height="500" />
            <img src="..\assets\XiZang\XZ- (9).jpg" width="400" height="500" />
            <img src="..\assets\XiZang\XZ- (10).jpg" width="400" height="500" />
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

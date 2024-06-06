<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<script setup></script>

<template>
  <main>
    <el-scrollbar height="717px" tag="div">
      <div class="trans">
        <section class="intro">
          <h1>欢迎来到上海</h1>
          <p>魔都上海，璀璨之城。</p>
        </section>
        <section class="culture">
          <h2>文化</h2>
          <p>
            上海，坐落于中国东部沿海，是中国最具国际化的城市之一，也是中国经济、金融、贸易中心之一。上海自19世纪末开始，便成为了外国列强的租界地，其独特的历史背景使得上海成为了中西文化交融的典范之地。上海既有东方之珠的繁华现代，也有老上海的历史风情，这座城市不仅拥有现代化的高楼大厦，还有着许多保存完好的历史建筑和文化遗产。
          </p>
        </section>
        <section class="attractions">
          <h2>景点</h2>
          <ul>
            <li>外滩</li>
            <li>上海南京路步行街</li>
            <li>上海豫园</li>
            <li>上海科技馆</li>
          </ul>
        </section>
        <section class="food">
          <h2>美食</h2>
          <p>
            上海美食，一城一味，鲜香无比。小笼包、生煎包、油爆虾、红烧肉，每一道都是对上海风味的完美演绎，让你在每一口中尽情感受这座城市的独特魅力。品味上海，品味繁华与美食的完美结合。
          </p>
          <el-scrollbar>
            <div class="flex_bar">
              <img src="..\assets\ShangHai\SH-(1).jpg" width="400" height="500" />
              <img src="..\assets\ShangHai\SH-(2).jpg" width="400" height="500" />
              <img src="..\assets\ShangHai\SH-(3).jpg" width="400" height="500" />
              <img src="..\assets\ShangHai\SH-(4).jpg" width="400" height="500" />
              <img src="..\assets\ShangHai\SH-(5).jpg" width="400" height="500" />
              <img src="..\assets\ShangHai\SH-(6).jpg" width="400" height="500" />
              <img src="..\assets\ShangHai\SH-(7).jpg" width="400" height="500" />
              <img src="..\assets\ShangHai\SH-(8).jpg" width="400" height="500" />
              <img src="..\assets\ShangHai\SH-(9).jpg" width="400" height="500" />
              <img src="..\assets\ShangHai\SH-(10).jpg" width="400" height="500" />
            </div>
          </el-scrollbar>
        </section>
      </div>
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

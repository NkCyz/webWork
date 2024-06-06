<script setup></script>

<template>
  <main>
    <section class="intro">
      <h1>欢迎来到广西</h1>
      <p>广西南路，粤西八桂，百越杂处。</p>
    </section>
    <section class="culture">
      <h2>文化</h2>
      <p>广西，这片神奇的土地，孕育了丰富多彩的非遗文化。无论是壮族的铜鼓、瑶族的刺绣，还是苗族的银饰，都是中华民族非物质文化遗产的瑰宝。
        一起走进广西非遗的世界，感受那份传承千年的魅力！</p>
    </section>
    <section class="attractions">
      <h2>景点</h2>
      <ul>
        <li>桂林</li>
        <li>百色</li>
        <li>阳朔世外桃源</li>
        <li>北海老街</li>
      </ul>
    </section>
    <section class="food">
      <h2>美食</h2>
      <p>广西，一个山美水美人更美的地方。在这片山清水秀的土地上，不单单是造就了广西山水梯田的壮美，还养育了一方人，滋生了万种美味，
        这里的传统特色美食让众多食客赞叹不已，味道独树一帜。</p>
      <img src="..\assets\GUANGXI\图片1.jpg" width="400" height="500" >
      <img src="..\assets\GUANGXI\图片2.jpg" width="400" height="500" >
      <img src="..\assets\GUANGXI\图片3.jpg" width="400" height="500" >
      <img src="..\assets\GUANGXI\图片4.jpg" width="400" height="500" >
      <img src="..\assets\GUANGXI\图片5.jpg" width="400" height="500" >
      <img src="..\assets\GUANGXI\图片6.jpg" width="400" height="500" >
      <img src="..\assets\GUANGXI\图片7.jpg" width="400" height="500" >
      <img src="..\assets\GUANGXI\图片8.jpg" width="400" height="500" >
      <img src="..\assets\GUANGXI\图片9.jpg" width="400" height="500" >
      <img src="..\assets\GUANGXI\图片10.jpg" width="400" height="500" >
    </section>
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
  margin: 150px;
  padding: 80px;
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
</style>

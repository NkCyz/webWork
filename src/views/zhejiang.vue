
<script setup></script>

<template>
  <main>
    <section class="intro">
      <h1>欢迎来到河北</h1>
      <p>这么近那么美，周末到河北</p>
    </section>
    <section class="culture">
      <h2>文化</h2>
      <p>连接山海、怀抱京津，北望辽东、南守中原，这个地方是河北，扼守华北的咽喉，包裹着中国的心脏。</p>
    </section>
    <section class="attractions">
      <h2>景点</h2>
      <ul>
        <li>秦皇岛-北戴河</li>
        <li>承德避暑山庄</li>
        <li>正定古城</li>
        <li>狼牙山</li>
      </ul>
    </section>
    <section class="food">
      <h2>美食</h2>
      <p>河北，紧邻着首都北京，算得上是“天子脚下”，但存在感似乎并不高。连带着河北的各种特色美食也一个比一个低调。河北的美食虽说低调，可千万不能小看，个个都独具特色，且美味自成一派。</p>
      
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




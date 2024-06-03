
<script setup></script>

<template>
  <main>
    <section class="intro">
      <h1>欢迎来到河南</h1>
      <p>河南是中国的文化发源地之一，拥有丰富的历史和独特的美食。</p>
    </section>
    <section class="culture">
      <h2>文化</h2>
      <p>河南是中国古代文明的摇篮，拥有众多的历史遗迹和文化遗产，如少林寺和龙门石窟。</p>
    </section>
    <section class="attractions">
      <h2>景点</h2>
      <ul>
        <li>少林寺</li>
        <li>龙门石窟</li>
        <li>嵩山</li>
        <li>开封府</li>
      </ul>
    </section>
    <section class="food">
      <h2>美食</h2>
      <p>河南的美食丰富多样，尤其以烩面和胡辣汤最为出名。</p>
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




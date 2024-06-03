<script setup></script>

<template>
  <main>
    <section class="intro">
      <h1>欢迎来到安徽</h1>
      <p>徽州烟雨醉江南，皖山皖水情无限</p>
    </section>
    <section class="culture">
      <h2>文化</h2>
      <p>安徽由于历史原因和地形、地貌的特点，形成四大文化圈，即淮河文化、庐州文化、徽文化、皖江文化，各具特色，影响深远。</p>
    </section>
    <section class="attractions">
      <h2>景点</h2>
      <ul>
        <li>黄山风景区</li>
        <li>宏村古镇</li>
        <li>徽州古城</li>
        <li>翡翠谷</li>
      </ul>
    </section>
    <section class="food">
      <h2>美食</h2>
      <p>徽菜起源于南宋时期的古徽州，原是徽州山区的地方风味，经过历代名厨的辛勤创造、兼收并蓄，徽菜已逐渐从徽州地区的山乡风味脱颖而出，
        如今已集中了安徽各地的风味特邑、名馔佳肴，逐步形成了一个雅俗共赏、南北咸宜、独具一格、自成一体的著名菜系。</p>
      
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




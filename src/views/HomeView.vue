<template>
  <div
    ref="chinaMap"
    style="
      height: 800px;
      width: 1050px;
      margin-left: 75px;
      margin-right: 75px;
      padding-left: 40px;
      padding-right: 40px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: transparent;
      background-image: linear-gradient(
        to right,
        rgba(225, 225, 225, 0.75),
        rgba(225, 225, 225, 0.75)
      );
    "
  ></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import chinaJSON from '../assets/json/china.json'
import { onMounted, ref } from 'vue'
const chinaMap = ref()
onMounted(() => {
  drawChina()
})
let regions = []
let scatter = [
  { name: '北京烤鸭', value: [116.46122, 39.97886, 9] },
  { name: '天津狗不理', value: [117.12, 39.3434, 8] },
  { name: '河北驴肉火烧', value: [115.4948, 38.1006, 7] },
  { name: '山西刀削面', value: [112.5489, 37.857, 8] },
  { name: '内蒙古烤全羊', value: [111.6648, 40.8106, 9] },
  { name: '辽宁锅包肉', value: [123.4315, 41.8357, 8] },
  { name: '吉林冷面', value: [126.5589, 43.8371, 8] },
  { name: '黑龙江哈尔滨红肠', value: [126.6328, 45.8038, 8] },
  { name: '上海小笼包', value: [121.4737, 31.2304, 9] },
  { name: '江苏扬州炒饭', value: [119.9171, 32.3926, 8] },
  { name: '浙江西湖醋鱼', value: [120.1551, 30.2576, 9] },
  { name: '安徽黄山毛峰', value: [118.3176, 30.0391, 8] },
  { name: '福建佛跳墙', value: [119.2965, 26.0745, 9] },
  { name: '江西瓦灰鸡', value: [115.8922, 28.6828, 8] },
  { name: '山东煎饼', value: [117.0009, 36.6512, 9] },
  { name: '河南烩面', value: [113.6254, 34.7466, 8] },
  { name: '湖北热干面', value: [114.3162, 30.5928, 9] },
  { name: '湖南臭豆腐', value: [112.9388, 28.2282, 9] },
  { name: '广东早茶', value: [113.2644, 23.1291, 9] },
  { name: '广西螺蛳粉', value: [108.3333, 22.8167, 8] },
  { name: '海南椰子鸡', value: [110.3417, 20.0308, 8] },
  { name: '四川火锅', value: [104.0668, 30.5728, 9] },
  { name: '贵州茅台酒', value: [106.9373, 27.7064, 9] },
  { name: '云南过桥米线', value: [102.7139, 25.0559, 9] },
  { name: '西藏酥油茶', value: [91.1409, 29.6469, 8] },
  { name: '陕西肉夹馍', value: [108.93, 34.3416, 9] },
  { name: '甘肃兰州拉面', value: [103.86615, 36.040129, 9] },
  { name: '青海手抓羊肉', value: [101.7698, 36.6407, 8] },
  { name: '宁夏手抓羊肉', value: [106.2325, 38.4864, 8] },
  { name: '新疆烤全羊', value: [87.617233, 43.792818, 9] },
  { name: '岳阳楼', value: [113.120833, 29.374722, 9] },
  { name: '丹霞山', value: [113.621111, 24.803889, 9] },
  { name: '桂林山水', value: [110.250556, 25.273889, 10] },
  { name: '漓江', value: [110.285833, 25.285556, 9] },
  { name: '北海银滩', value: [109.119167, 21.472222, 9] },
  { name: '天涯海角', value: [109.507778, 18.256944, 9] },
  { name: '峨眉山', value: [103.492222, 29.5975, 10] },
  { name: '九寨沟', value: [103.985556, 33.263056, 10] }
]
function drawChina() {
  var myChart = echarts.init(chinaMap.value)
  echarts.registerMap('china', chinaJSON) //注册可用的地图
  var option = {
    geo: {
      map: 'china',
      roam: true, //是否允许缩放，拖拽
      zoom: 1.5, //初始化大小
      //缩放大小限制
      scaleLimit: {
        min: 1, //最小
        max: 10 //最大
      },
      //设置中心点
      center: [108, 35.5],
      //省份地图添加背景
      regions: regions,
      itemStyle: {
        areaColor: '#ddd',
        color: 'red',
        borderColor: '#666',
        borderWidth: 0.3
      },
      //高亮状态
      emphasis: {
        itemStyle: {
          areaColor: '#1af9e5',
          color: '#fff'
        }
      }
    },
    //配置属性
    series: {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: scatter,
      showEffectOn: 'render',
      rippleEffect: {
        //涟漪特效相关配置
        brushType: 'stroke' //波纹的绘制方式，可选 'stroke' 和 'fill'
      },
      hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果
      label: {
        //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      itemStyle: {
        //图形样式，normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时
        normal: {
          color: '#ffffff', //散点的颜色
          shadowBlur: 10,
          shadowColor: 20,
          fontSize: '12px'
        }
      },
      zlevel: 1
    }
  }
  myChart.setOption(option)
}
</script>

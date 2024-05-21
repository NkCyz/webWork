var myChart = echarts.init(document.getElementById("map"));

var option = {
  visualMap: {
    show: true, // 显示视觉映射组件
    type: "continuous", // 选择类型，continuous 表示连续型
    dimension: 2, // 映射到数据项的维度
    min: 0, // 数据最小值
    max: 5000, // 数据最大值
    calculable: true, // 是否显示拖拽用的手柄
    inRange: {
      color: ["#50a3ba", "#e69d87", "#829a64", "#1e9c89", "#8b98a4"], // 颜色范围
    },
    text: ["High", "Low"], // 文本列表，每个文本用于描述每个滑块的状态
    realtime: false, // 是否实时更新系列
    orient: "vertical", // 布局方式，垂直或水平
    left: "left", // 组件离容器左侧的距离
    top: "bottom", // 组件离容器底部的距离
  },
  series: [
    {
      name: "中国地图",
      type: "map",
      mapType: "china",
      data: [
        { name: "北京", value: 0 },
        { name: "天津", value: 3000 },
        // ...其他省份数据，确保每个省份都有 value 值
      ],
      label: {
        show: true,
        textStyle: {
          color: "#333",
        },
      },
      itemStyle: {
        normal: {
          borderColor: "#eee", // 省份边界颜色
          areaColor: "#ddd", // 省份背景颜色
          borderWidth: 1,
        },
        emphasis: {
          areaColor: "#bbb", // 鼠标悬浮时的背景颜色
          borderColor: "#ccc",
          borderWidth: 1,
        },
      },
      visualMap: {
        // 为系列设置 visualMap 索引
        index: 0, // 引用上面定义的 visualMap 组件的索引
        inRange: {
          color: ["#50a3ba", "#e69d87", "#829a64", "#1e9c89", "#8b98a4"], // 颜色范围
        },
      },
    },
  ],
};

myChart.setOption(option);

// 监听点击事件
myChart.on('click', function (params) {
    // 检查点击的是否是地图的省份区域
    if (params.seriesType === 'map' && params.data) {
        // 显示省份信息详情
        var infoHtml = '<h4>省份信息</h4>';
        infoHtml += '<p>名称: ' + params.name + '</p>';
        infoHtml += '<p>值: ' + params.value + '</p>';
        // 可以在这里添加更多省份信息

        document.getElementById('provinceInfo').innerHTML = infoHtml;
        document.getElementById('provinceInfo').style.display = 'block';

        // 定位弹出层位置（示例：居中显示）
        var x = Math.max(document.body.scrollWidth - 300, 300) / 2;
        var y = document.body.scrollHeight / 2;
        document.getElementById('provinceInfo').style.left = x + 'px';
        document.getElementById('provinceInfo').style.top = y + 'px';
    } else {
        // 如果点击的是空白地方，则隐藏省份介绍
        document.getElementById('provinceInfo').style.display = 'none';
    }
});

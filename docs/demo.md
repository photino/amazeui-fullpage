---
title: Amaze UI Fullpage 使用演示
---

## Fullpage 使用演示

### [纯CSS实现](./demo-1.html)

```html
<div id="success" class="am-fullpage am-vertical-align am-alert-success am-text-center">
  <div class="am-vertical-align-middle am-text-xxxl">
    <p>第一屏 第一段落</p>
    <p>第一屏 第二段落</p>
    <p>第一屏 第三段落</p>
    <a class="am-absolute-bottom" href="#warning"><span class="am-icon-btn am-primary am-icon-angle-double-down"></span></a>
  </div>
</div>

<div id="warning" class="am-fullpage am-vertical-align am-alert-warning am-text-center">
  <a class="am-nav-left" href="#success"><span class="am-icon-btn am-primary am-icon-angle-double-left"></span></a>
  <a class="am-nav-right" href="#danger"><span class="am-icon-btn am-primary am-icon-angle-double-right"></span></a>
  <div class="am-vertical-align-middle am-text-xxxl">
    <p>第二屏 第一段落</p>
    <p>第二屏 第二段落</p>
    <p>第二屏 第三段落</p>
  </div>
</div>

<div id="danger" class="am-fullpage am-vertical-align am-alert-danger am-text-center">
  <div class="am-vertical-align-middle am-text-xxxl">
    <p>第三屏 第一段落</p>
    <p>第三屏 第二段落</p>
    <p>第三屏 第三段落</p>
    <a class="am-absolute-bottom" href="#success"><span class="am-icon-btn am-primary am-icon-repeat"></span></a>
  </div>
</div>
```

### [纯CSS实现（带图片背景）](./demo-2.html)

```html
<div id="page-1" class="am-fullpage am-vertical-align">
  <div class="am-vertical-align-middle am-background-image am-text-xxxl">
    <img src="images/bing-1.jpg" alt="Bing image 1">
    <p class="am-padding-horizontal-xl">伫立在像被刀削过一般的山顶之上的修道院，是希腊人向世人展示信仰力量的方式。如果不是那红色的屋顶，很难发现在这么险峻的山顶上会有这么一座伟大的建筑。每天日出日落的时候，当太阳掠过修道院的屋顶，会感受到一种神圣的力量。</p>
  </div>
</div>

<div id="page-2" class="am-fullpage am-vertical-align">
  <div class="am-vertical-align-middle am-background-image am-text-xxxl">
    <img src="images/bing-2.jpg" alt="Bing image 2">
    <p class="am-padding-horizontal-xl">神秘奥妙的海底世界中，生活着形态各异的海洋生物，在蔚蓝深邃的海底总是有我们探寻不完的秘密。你看那边，剃刀鱼正在红色的海鞭中穿梭，与海鞭进行亲密的互动。如果您想亲身领略这海底世界的无穷魅力，不如到太平洋的美丽海岛进行一次潜水吧。</p>
  </div>
</div>

<div id="page-3" class="am-fullpage am-vertical-align">
  <div class="am-vertical-align-middle am-background-image am-text-xxxl">
    <img src="images/bing-3.jpg" alt="Bing image 3">
    <p class="am-padding-horizontal-xl">水平如镜的湖面，岩石耸立的小岛，这是世界上第一大淡水湖苏必利尔湖。夏天的它仿佛蔚蓝的明镜，波光粼粼，引人入胜；冬季的它被冰雪覆盖，如同一片跌落在地上的白云。待冰雪融化时，可以听到湖面冰块融化、碰撞的声音，奇妙的仿佛人也冻结在这美丽的湖畔。</p>
  </div>
</div>

<ol class="am-pagination am-pagination-vertical am-nav-right">
  <li><a href="#page-1"></a></li>
  <li><a href="#page-2"></a></li>
  <li><a href="#page-3"></a></li>
</ol>
```

### [自动循环播放（Data API）](./demo-3.html)

```html
<div class="am-overflow-hidden" data-am-autoplay="5000">
  <div id="page-1" class="am-fullpage am-vertical-align">
    <div class="am-vertical-align-middle am-background-image am-text-xxxl">
      <img src="images/bing-1.jpg" alt="Bing image 1">
      <p class="am-padding-horizontal-xl">伫立在像被刀削过一般的山顶之上的修道院，是希腊人向世人展示信仰力量的方式。如果不是那红色的屋顶，很难发现在这么险峻的山顶上会有这么一座伟大的建筑。每天日出日落的时候，当太阳掠过修道院的屋顶，会感受到一种神圣的力量。</p>
    </div>
  </div>

  <div id="page-2" class="am-fullpage am-vertical-align">
    <div class="am-vertical-align-middle am-background-image am-text-xxxl">
      <img src="images/bing-2.jpg" alt="Bing image 2">
      <p class="am-padding-horizontal-xl">神秘奥妙的海底世界中，生活着形态各异的海洋生物，在蔚蓝深邃的海底总是有我们探寻不完的秘密。你看那边，剃刀鱼正在红色的海鞭中穿梭，与海鞭进行亲密的互动。如果您想亲身领略这海底世界的无穷魅力，不如到太平洋的美丽海岛进行一次潜水吧。</p>
    </div>
  </div>

  <div id="page-3" class="am-fullpage am-vertical-align">
    <div class="am-vertical-align-middle am-background-image am-text-xxxl">
      <img src="images/bing-3.jpg" alt="Bing image 3">
      <p class="am-padding-horizontal-xl">水平如镜的湖面，岩石耸立的小岛，这是世界上第一大淡水湖苏必利尔湖。夏天的它仿佛蔚蓝的明镜，波光粼粼，引人入胜；冬季的它被冰雪覆盖，如同一片跌落在地上的白云。待冰雪融化时，可以听到湖面冰块融化、碰撞的声音，奇妙的仿佛人也冻结在这美丽的湖畔。</p>
    </div>
  </div>

  <ol class="am-pagination am-pagination-vertical am-nav-right">
    <li class="am-active"><a href="#page-1"></a></li>
    <li><a href="#page-2"></a></li>
    <li><a href="#page-3"></a></li>
  </ol>
</div>
```

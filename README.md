# Amaze UI Fullpage

- [使用示例](http://photino.github.io/amazeui-fullpage/docs/demo.html)
  1. [纯CSS实现](http://photino.github.io/amazeui-fullpage/docs/demo-1.html)
  2. [纯CSS实现（带图片背景）](http://photino.github.io/amazeui-fullpage/docs/demo-2.html)
  3. [自动循环播放（Data API）](http://photino.github.io/amazeui-fullpage/docs/demo-3.html)

## 使用说明

1. 获取 Amaze UI Fullpage

  - [直接下载](https://github.com/photino/amazeui-fullpage/archive/master.zip)
  - 使用 NPM: `npm install amazeui-fullpage`

2. 在 Amaze UI 样式之后引入 Fullpage 样式（`dist` 目录下的 CSS）：

  Amaze UI Fullpage 依赖 Amaze UI 样式。

  ```html
  <link rel="stylesheet" href="path/to/amazeui.min.css"/>
  <link rel="stylesheet" href="path/to/amazeui.fullpage.min.css"/>
  ```

3. 引入 Fullpage 插件（`dist` 目录下的 JS）：

  Amaze UI Fullpage 中的JS文件并不是必须的，使用纯CSS就能实现最基本的单页滚动效果（需要浏览器支持`vw`和`vh`）。

  ```html
  <script src="path/to/jquery.min.js"></script>
  <script src="path/to/amazeui.fullpage.min.js"></script>
  ```

4. 初始化 Fullpage:

  Amaze UI Fullpage 也支持Data API。

  ```js
  $(function() {
      $('.am-fullpage').fullpage({
        autoplay: true,
        interval: 5000
      });
  });
  ```

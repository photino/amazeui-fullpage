# Amaze UI Fullpage

- [使用示例](http://photino.github.io/amazeui-fullpage/docs/demo.html)
- [API 文档](http://photino.github.io/amazeui-fullpage/docs/api.html)

## 使用说明

1. 获取 Amaze UI fullpage

  - [直接下载](http://photino.github.io/amazeui-fullpage/archive/master.zip)
  - 使用 NPM: `npm install amazeui-fullpage`

2. 在 Amaze UI 样式之后引入 fullpage 样式（`dist` 目录下的 CSS）：

  Amaze UI fullpage 依赖 Amaze UI 样式。

  ```html
  <link rel="stylesheet" href="path/to/amazeui.min.css"/>
  <link rel="stylesheet" href="path/to/amazeui.fullpage.min.css"/>
  ```

3. 引入 fullpage 插件（`dist` 目录下的 JS）：

  ```html
  <script src="path/to/jquery.min.js"></script>
  <script src="path/to/amazeui.fullpage.min.js"></script>
  ```

4. 初始化 fullpage:

  ```js
  $(function() {
      $('#fullpage').fullpage();
  });
  ```

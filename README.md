# vue2-element-admin-template

> 本项目主要是想自己搭建一个通用的后台模板，增加一些常用的功能，提高开发效率。

## 目录结构

```js
├── mock                       // mock数据  
├── public                     // html
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局 filter
│   ├── icons                  // 项目所有 svg icons
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── views                   // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   └── permission.js          // 权限管理
├── .gitignore                 // git 忽略项
└── package.json               // package.json

```
## 安装

```sh
# 克隆项目
git clone https://github.com/youxiubiji/vue2-element-admin-template.git

# 进入项目目录
cd vue-element-admin

# 安装依赖
npm install

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 本地开发 启动项目
npm run serve
```

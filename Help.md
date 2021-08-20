#### 工具

API请求：[axios](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)
现已将axios封装到全局变量中，使用方法

```javascript
this.$axios.post("/user/login", data)
        .then((response) => {})
        .catch((err) => {});
```

#### 目录结构

`index.html` 项目入口，除添加CDN资源外，不需要修改

`package.json` npm依赖包列表，勿手动修改

`package-lock.json` npm依赖包版本控制，勿手动修改

`node_modules` npm依赖包安装位置

`src/App.vue` Vue入口

`src/router/index.js` Vue-router路由列表，常修改文件，参考网站[Vue-router](https://router.vuejs.org)

`src/views` 页面组件以及页面子组件

`src/components` 放置所有跨页面共享的元素，比如导航栏

#### 代码规范

+ 所有组件名为首字母大写的CamelCase，不能存在两个文件名为同一个词的不同大小写的情况。

#### Vuetify参考文档

[开始使用 Vuetify — Vuetify (vuetifyjs.com)](https://vuetifyjs.com/zh-Hans/getting-started/installation/)

##### 


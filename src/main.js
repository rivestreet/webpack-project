import { banner } from "./banner.js";
import { tab } from "./tab.js";
banner();
tab();
import "./styles/index.css";
import "./styles/index.less";
import "./assets/fonts/iconfont.css";
//引入图片
import gifSrc from "./assets/1.gif";
import pngSrc from "./assets/logo_small.png";

//创建图片节点
const gif = document.createElement("img");
const png = document.createElement("img");

//给src赋值
gif.src = gifSrc;
png.src = pngSrc;

//插入节点
document.body.appendChild(gif);
document.body.appendChild(png);
const fn = () => {
  console.log("你好");
};
console.log(fn);

import App from "./App.vue"; // 根vue文件
import Vue from "vue"; // 引入vue.js对象

new Vue({
  render: (h) => h(App), // 渲染函数, 渲染App组件里的标签
}).$mount("#app"); // 把vue文件的标签结构 -> 挂载到id为app的标签里

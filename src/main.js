import {banner} from './banner.js'
import {tab} from './tab.js'
banner()
tab()
import './styles/index.css'
import './styles/index.less'
import './assets/fonts/iconfont.css'
//引入图片
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

//创建图片节点
const gif = document.createElement('img')
const png = document.createElement('img')

//给src赋值
gif.src = gifSrc
png.src = pngSrc

//插入节点
document.body.appendChild(gif)
document.body.appendChild(png)
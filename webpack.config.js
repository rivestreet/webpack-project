const path = require("path");
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/main.js", // 入口
  output: {
    path: path.join(__dirname, "dist"), // 出口路径
    filename: "bundle.js", // 出口文件名
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    port: 65535, // 端口号
    open: true,
  },
  module: {
    rules: [{
      test: /\.css$/i, // 匹配所有的css文件
      // use数组里从右向左运行
      // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
      // 再用 style-loader 将样式, 把css插入到dom中
      use: [ "style-loader", "css-loader"]
    
    },
    {
      test: /\.less$/,
    	// 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
        use: [ "style-loader", "css-loader", 'less-loader']
    },
    {
      test:/\.(png|jpg|gif)$/i,
      type :'asset',
      generator: {
        filename:"images/[hash:6][ext]",
      }
    },
    {
      test:/.(eot|svg|ttf|woff|woff2)$/i,
      type:"asset/resource",
      generator:{
        filename:"images/[hash:6][ext]",
      }
    },
    {
      test:/\.js$/,
      use:['babel-loader', ]
    }
  ],
  },
};

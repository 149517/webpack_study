const path = require('path')

// 导入html-webpack=pligin 插件
const HtmlPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPlugin = new HtmlPlugin({
	// 指定要复制那个页面
	template:'./src/index.html',
	// 指定要复制的文件名
	filename:'./index.html'
})

// 使用Node.js的导出语法。向外导出一个 webpack 的配置对象
module.exports = {
	// 在开发调试阶段 将devtool 的值设置为 eval-source-map 使其运行错误时候的行号与原文件对应
	// 在生产环境下 只定位行号，而不暴露源码 nosources-source-map ，或者 直接关闭 sourcemap
	devtool:'nosources-source-map',
	// devtool:'eval-source-map',
	
	
	// 代表 webpack 的运行模式，可选值有 development 和 production
	
	mode:'development',
	// enter 指定要处理的文件
	// entry:path.join(__dirname,'./src/index1.js'),
	// output 指定生成的文件的输出路径
	output:{
	// 	// 存放的目录,这里的path是一个属性
		path:path.join(__dirname,'dist'),
		// 生成的文件
		filename:'bundle.js',
		},
	 devServer: {
	    static: './',
		open: true,
	  },
	// 插件的数组，将在 webpack 运行时候自动调用插件
	plugins:[htmlPlugin,new CleanWebpackPlugin(),],
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			//指定不同模块的load
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			// 处理图片文件的loader
			// 如果需要调用的loader只有一个，则可以传递字符串，多个则需要数组
			// 使用&符号进行连接，将其储存到dist下的images文件夹，使用base64的图片不会存放
			{test:/\.jpg|png|gif$/,use:'url-loader?limit=13000&outputPath=images'},
			// [{loader:'url-loader',options:{limit:13000}}]
			
			// 使用babel-loader 处理 更加高级的 js 代码
			// 只需要处理自己写的 js 代码，不需要处理第三方包的代码
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
		]
	}

}
module.exports = {
    publicPath: "./", // 公共路径(必须有的)
    outputDir: "dist", // 输出文件目录
    assetsDir: "static", //静态资源文件名称
    lintOnSave: false,
    productionSourceMap: false, //去除打包后js的map文件
    devServer: { //启动项目在8080端口自动打开
        open: true,
        port: 8080,
        proxy: null,
		// proxy: {
		//             '/api': {
		//                 target: "http://localhost:8888",//设置你调用的接口域名和端口号 别忘了加http
		//                 changeOrigin: true,
		//                 pathRewrite: {
		//                     '^/api': ''
		//                     //这里理解成用‘/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替
		//                     //比如我要调用'http://40.00.100.133:3002/user/login'，直接写‘/api/user/login'即可
		//                 }
		//             }
		//         }
		
    },
    //去掉console
    configureWebpack: (config) => {
        // 判断为生产模式下，因为开发模式我们是想保存console的
        if (process.env.NODE_ENV === "production") {
            config.optimization.minimizer.map((arg) => {
                const option = arg.options.terserOptions.compress;
                option.drop_console = true; // 打开开关
                return arg;
            });
        }
    },
    configureWebpack: {
        // 关闭 webpack 的性能提示
        // performance: {
        //   hints:false
        // }

        // //或者

        // 警告 webpack 的性能提示
        performance: {
            hints: 'warning',
            // 入口起点的最大体积
            maxEntrypointSize: 50000000,
            // 生成文件的最大体积
            maxAssetSize: 30000000,
            // 只给出 js 文件的性能提示
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith('.js')
            }
        }
    }
};
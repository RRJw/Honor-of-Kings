module.exports = {
  outputDir: __dirname + '/../server/admin', //将打包后的文件夹输出到相应的地址 __dirname相对路径相对于本文件在admin下的地址
  publicPath: process.env.NODE_ENV === 'production'
  ? '/admin/'  //打包build后公共资源路径地址
  : '/'
}
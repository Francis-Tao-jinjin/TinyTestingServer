# MEAN-stack-learning

方便前端开发测试API的小型server, 已经解决了跨域名请求问题，具体方法就是给 api 的响应包 res 做额外的设置：

res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
res.header('Access-Control-Allow-Headers', 'Content-Type');

＊＊＊＊＊（一定要对res做该设置，否则返回的res都会被浏览器拦截）

具体可以看 ./ea-test-server/controllers/api/ea-plan.js 中的用法。

服务器对client的请求的响应都写在 ./ea-test-server/controllers 下面。
数据模型和数据库的设置在 ./ea-test-server/models 下面。

./ea-test-server下：
	./ng
	./public
	./css
	./assets
	是小型前端，也可以在这里测试我们的api。其中./ng 和 ./css下的文件会被 minify、uglify 后放在 ./assets


运行方法，直接命令行 gulp dev
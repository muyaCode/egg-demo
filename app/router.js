'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 从服务端的实例对象中解构出处理路由的对象和处理控制器的对象
  const { router, controller } = app;

  // 利用路由器的对象监听路由的请求
  router.get('/', controller.home.index); // http://localhost:7001/
  router.get('/query', controller.home.getQuery); // http://localhost:7001/query?name=abc&age=18
  router.get('/params/:name/:age', controller.home.getParams); // http://localhost:7001/params/abc/18
  router.post('/body', controller.home.getBody); // API接口测试工具以post方法请求：http://localhost:7001/body
  // ejs模板渲染引擎页面
  router.get('/home', controller.home.getHome);
  // 新添加一个路由
  // router.get('/getNews', controller.home.getNews);
  // 数据处理
  router.get('/news', controller.home.getNews);
  // 定时任务路由
  router.get('/test', controller.home.test);
};

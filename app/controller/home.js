'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getQuery() {
    // 获取传统get请求参数
    // this.ctx.request.query
    const query = this.ctx.query;
    this.ctx.body = query;
  }
  async getParams() {
    // 获取动态路由形式的get请求参数
    const params = this.ctx.params;
    this.ctx.body = params;
  }
  async getBody() {
    // 获取post请求参数
    const body = this.ctx.request.body;
    this.ctx.body = body;
  }
  // 模板渲染
  async getHome() {
    await this.ctx.render('index', { msg: 'ejs模板渲染' });
  }
  // 数据请求处理
  async getNews() {
    const data = await this.ctx.service.home.findNews();
    this.ctx.body = data;
  }
  // Cookie
  async setCookie() {
    this.ctx.cookies.set('name', 'lnj', {
      path: '/',
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      /*
        在EggJS中, 为了安全着想, 阿里的安全专家建议我们在设置Cookie的时候, 给保存的数据生成一个签名
        将来获取数据的时候, 再利用获取到的数据生成一个签名, 和当初保存的时候的签名进行对比
        如果一致, 表示保存在客户端的数据没有被篡改, 如果不一致表示保存在客户端的数据已经被篡改
        * */
      signed: true, // 根据config/config.default.js中的keys来生成签名
      encrypt: true, // 让EggJS帮我们加密之后再保存
    });
    this.ctx.body = '设置成功';
  }
  async getCookie() {
    const cookie = this.ctx.cookies.get('name', {
      signed: true,
      encrypt: true,
    });
    this.ctx.body = `获取Cookie成功 = ${cookie}`;
  }
  // 定时任务渲染方法
  async test() {
    /**
     * 运行自定义扩展的方法
    */
    // console.log(this.ctx.app.myTest('123'));
    // console.log(this.ctx.myTest('abc'));
    // console.log(this.ctx.request.myTest('666'));
    // console.log(this.ctx.response.myTest('888'));
    console.log(this.ctx.helper.md5('abc123'));
    // 渲染模板
    await this.ctx.render('index', { msg: this.ctx.app.msg });
  }
}

module.exports = HomeController;

// app/service/home.js
const Service = require('egg').Service;

class HomeService extends Service {
  async findNews() {
    // 发送get不带参数的请求
    const response = await this.ctx.curl('http://127.0.0.1:3000/getUser');
    // 发送get带参数的请求
    // let response = await this.ctx.curl('http://127.0.0.1:3000/getUser?name=it666&age=66');
    // 发送post不带参数的请求
    // let response = await this.ctx.curl('http://127.0.0.1:3000/getNews', {
    //     method: 'post'
    // });
    // 发送post带参数的请求
    // const response = await this.ctx.curl('http://localhost:7001/getNews2', {
    //   method: 'post',
    //   data: {
    //     name: 'lnj',
    //     age: 33,
    //   },
    // });
    const data = JSON.parse(response.data);
    console.log('HomeService', data);
    return data;
  }
}

module.exports = HomeService;

const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '3s', // 间隔3秒执行一次
      type: 'all', //  all表示当前服务器上所有相同的Node进程都执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const response = await this.ctx.curl('http://127.0.0.1:3000/getMsg');
    const data = new Buffer(response.data).toString();
    console.log(data);
  }
}

module.exports = UpdateCache;

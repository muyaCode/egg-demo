const crypto = require('crypto');

// 定义工具函数
module.exports = {
  md5: password => {
    // 1.指定加密方式
    const md5 = crypto.createHash('md5');
    // 2.指定需要加密的内容和加密之后输出的格式
    const hash = md5.update(password) // 指定需要加密的内容
      .digest('hex'); // 指定加密之后输出的格式
    return hash;
  },
};

/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1671107974531_378';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
    // ejs模板引擎配置
    view: { mapping: { '.html': 'ejs' } },
    // 配置需要的中间件，数组顺序即为中间件的加载顺序
    middleware: [ 'gzip' ],

    // 配置 gzip 中间件的配置
    gzip: {
      threshold: 1024, // 小于 1k 的响应体不压缩
    },
  };
};

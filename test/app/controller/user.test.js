'use strict';
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  it('测试注册-成功', async () => {
    app.mockCsrf();
    let user = {username:'123@qq.com', password:'abc123', gender:'男'};
    let response = await app.httpRequest().post('/api/user/register').send(user);
    assert(response.body.code === 200);
  });
  it('测试注册-用户名不符合预期', async () => {
    app.mockCsrf();
    let user = {username:'jonathan', password:'abc123', gender:'男'};
    let response = await app.httpRequest().post('/api/user/register').send(user);
    assert(response.body.code === 400);
  });
  it('测试注册-密码不符合预期', async () => {
    app.mockCsrf();
    let user = {username:'234@qq.com', password:'123', gender:'男'};
    let response = await app.httpRequest().post('/api/user/register').send(user);
    assert(response.body.code === 400);
  });
  after(async ()=>{
    await app.model.User.destroy({truncate:true, force: true});
  })
});

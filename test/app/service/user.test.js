'use strict';
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/service/user.test.js', () => {
    it('测试创建用户-成功', async () => {
        // 测试创建成功
        let ctx = app.mockContext();
        let user = {username:'123@qq.com', password:'abc123', gender:'男'};
        let res = await ctx.service.user.createUser(user);
        assert(res.username === '123@qq.com');

        // 测试用户名重复情况
        try {
            await ctx.service.user.createUser(user);
        }catch (e) {
            assert(e);
        }
    });
    after(async ()=>{
        await app.model.User.destroy({truncate:true, force: true});
    });
});

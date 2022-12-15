'use strict';
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/extend/context.test.js', () => {
    it('测试context', async () => {
        let ctx = app.mockContext();
        ctx.error();
        assert(ctx.body.code === 500);
        assert(ctx.body.msg === '错误');
    });
});

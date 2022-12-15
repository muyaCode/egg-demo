'use strict';
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/extend/helper.test.js', () => {
    it('测试helper', async () => {
        let ctx = app.mockContext();
        assert(ctx.helper.generatePwd('123') !== '123');
    });
});

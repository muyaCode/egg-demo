'use strict';
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/extend/request.test.js', () => {
    it('测试request', async () => {
        let ctx = app.mockContext({
            headers:{
                // 'user-agent':'Chrome'
                'user-agent':'Mozilla'
            }
        });
       // assert(ctx.request.isChrome() === true);
       assert(ctx.request.isChrome() === false);
    });
});

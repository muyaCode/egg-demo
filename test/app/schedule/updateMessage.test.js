'use strict';
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/schedule/updateMessage.test.js', () => {
    it('测试updateMessage', async () => {
        await app.runSchedule('updateMessage');
        assert(app.msg === 'lnj+1');
        await app.runSchedule('updateMessage');
        assert(app.msg === 'lnj+2');
    });
});

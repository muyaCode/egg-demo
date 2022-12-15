'use strict';
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/extend/application.test.js', () => {
    it('测试application', async () => {
        app.set('name', 'it666.com');
        assert(app.get('name') === 'it666.com');
    });
});

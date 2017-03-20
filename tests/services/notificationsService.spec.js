'use strict';

import { expect } from 'chai';
import sinon from 'sinon';
import notificationsService from '../../src/services/NotificationsService';

describe('notificationsService', () => {
    it('sub', () => {
        let callback1 = sinon.spy();
        let callback2 = sinon.spy();
        notificationsService.sub('test', callback1);
        expect(notificationsService.events['test'].length).to.equal(1);

        notificationsService.sub('test2', callback2);
        expect(notificationsService.events['test2'].length).to.equal(1);

        notificationsService.pub('test');
        expect(callback1.called).to.equal(true);

        notificationsService.pub('test2');
        expect(callback2.called).to.equal(true);
    });
});
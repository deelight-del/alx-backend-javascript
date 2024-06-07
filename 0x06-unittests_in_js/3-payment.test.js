/**
 * Testing for 3-payment.js
 */

const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('sendPayment should call calculate number', function () {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    assert.equal(utilsSpy.calledWith('SUM', 100, 20), true);
    assert.equal(utilsSpy.withArgs('SUM', 100, 20).calledOnce, true);
  });
});

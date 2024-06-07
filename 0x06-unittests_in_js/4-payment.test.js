/**
 * Testing for 3-payment.js
 */

const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('sendPayment should call calculate number', function () {
    const utilsStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    assert.equal(utilsStub.calledWith('SUM', 100, 20), true);
    assert.equal(utilsStub.withArgs('SUM', 100, 20).calledOnce, true);
    assert.equal(spy.calledWith('The total is: 10'), true);
  });
});

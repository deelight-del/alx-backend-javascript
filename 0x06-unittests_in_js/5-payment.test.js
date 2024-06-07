/**
 * Module to test 5-payment.js
 */

const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestApi', function () {
  const spy = sinon.spy(console, 'log');
  beforeEach(function () {
    spy.resetHistory();
  });
  afterEach(function () {
    spy.resetHistory();
  });
  it('sendPaymentRequestApi with 100, 20', function () {
    sendPaymentRequestToApi(100, 20);
    assert.equal(spy.calledWith('The total is: 120'), true);
    assert.equal(spy.withArgs('The total is: 120').calledOnce, true);
  });
  it('sendPaymentRequestApi with 10, 10', function () {
    sendPaymentRequestToApi(10, 10);
    assert.equal(spy.calledWith('The total is: 20'), true);
    assert.equal(spy.withArgs('The total is: 20').calledOnce, true);
  });
});

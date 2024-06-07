/**
 * Create a test file that tests the server.
 */

const assert = require('assert');
const request = require('request');

describe('Testing our application', function () {
  describe('testing for existing routes', function () {
    it('Request to default route should give a 200 status', function (done) {
      request('http://localhost:7865', function (err, resp, body) {
        if (err) { assert.equal(true, false); }
        assert.equal(resp.statusCode, 200);
        assert.equal(body, 'Welcome to the payment system');
        done();
      });
    });
    it('Request to / should give a 200 status', function (done) {
      request('http://localhost:7865/', function (err, resp, body) {
        if (err) { assert.equal(true, false); }
        assert.equal(resp.statusCode, 200);
        assert.equal(body, 'Welcome to the payment system');
        done();
      });
    });
  });
  describe('testing for non-existing routes', function () {
    it('Request to non existing route, should give 404 status', function (done) {
      request('http://localhost:7865/non-existing', function (err, resp, body) {
        if (err) { assert.equal(true, false); }
        assert.equal(resp.statusCode, 404);
        // assert.equal(body, 'Welcome to the payment system');
        done();
      });
    });
  });
  describe('testing for the cart route', function () {
    it('Request to non cart route without id should give 404 resp.', function (done) {
      request('http://localhost:7865/cart', function (err, resp, body) {
        if (err) { assert.equal(true, false); }
        assert.equal(resp.statusCode, 404);
        // assert.equal(body, 'Welcome to the payment system');
        done();
      });
    });
    it('Request to cart route with id should give valid resp', function (done) {
      request('http://localhost:7865/cart/12', function (err, resp, body) {
        if (err) { assert.equal(true, false); }
        assert.equal(resp.statusCode, 200);
        assert.equal(body, 'Payment methods for cart 12');
        done();
      });
    });
    it('Request to cart route with floating id should give invalid resp', function (done) {
      request('http://localhost:7865/cart/1.2', function (err, resp, body) {
        if (err) { assert.equal(true, false); }
        assert.equal(resp.statusCode, 404);
        // assert.equal(body, 'Payment methods for cart 12');
        done();
      });
    });
  });
});

/**
 * Module to test the 6-payment token.
 */

const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('When true, should return payload.', function (done) {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        assert.deepEqual(data, { data: 'Successful response from the API' });
        done();
      });
  });
});

/**
 * test file that tests for 0-calcul.js.
 */

const assert = require('assert');
const CalculateNumber = require('./0-calcul');

describe('CalculateNumber', function () {
  it('1 + 3 should return 4', function () {
    assert.equal(CalculateNumber(1, 3), 4);
  });
  it('1 + 3.7 should return 5', function () {
    assert.equal(CalculateNumber(1, 3.7), 5);
  });
  it('1.2 + 3.7 should return 4', function () {
    assert.equal(CalculateNumber(1.2, 3.7), 5);
  });
  it('1.5 + 3.7 should return 4', function () {
    assert.equal(CalculateNumber(1.5, 3.7), 6);
  });
});
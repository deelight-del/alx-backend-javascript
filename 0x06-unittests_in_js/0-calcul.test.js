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
  it('1.5 + 3.7 should return 6', function () {
    assert.equal(CalculateNumber(1.5, 3.7), 6);
  });

  describe('For second number rounded', function () {
    it('1.2 + 6 should return 5', function () {
      assert.equal(CalculateNumber(1.2, 6), 7);
    });
    it('0.2 + 6 should return 5', function () {
      assert.equal(CalculateNumber(0.2, 6), 6);
    });
    it('0.2 + 6 should return 5', function () {
      assert.equal(CalculateNumber(0.2, 6), 6);
    });
    it('1.7 + 3 should return 5', function () {
      assert.equal(CalculateNumber(1.7, 3), 5);
    });
    it('3.7 + 3 should return 7', function () {
      assert.equal(CalculateNumber(3.7, 3), 7);
    });
  });
});

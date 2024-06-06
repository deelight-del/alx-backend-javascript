/**
 * The test file for './1-calcul.js'
 */

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('CalculateNumber', function () {
  it('SUM of 1.4 and 4.5 should give 6', function () {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('DIFFERENCE of 4.5 from 1.4 should give -4', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('DIVIDE 1.4 by 4.5 should give 0.2', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('DIVIDE 1.4 by 0 should give Error', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});

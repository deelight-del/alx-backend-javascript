/**
 * The test file for './1-calcul.js'
 */

const chai = require('chai');
const calculateNumber = require('./1-calcul');

describe('CalculateNumber', function () {
  it('SUM of 1.4 and 4.5 should give 6', function () {
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('DIFFERENCE of 4.5 from 1.4 should give -4', function () {
    chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('DIVIDE 1.4 by 4.5 should give 0.2', function () {
    chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('DIVIDE 1.4 by 0 should give Error', function () {
    chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});

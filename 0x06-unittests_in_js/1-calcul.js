/**
 * A calculator for given
 *a and b.
 */

function calculateNumber (type, a, b) {
  const newA = Math.round(a);
  const newB = Math.round(b);
  switch (type) {
    case 'SUM':
      return newA + newB;
    case 'SUBTRACT':
      return newA - newB;
    case 'DIVIDE':
      if (newB === 0) { return 'Error'; }
      return newA / newB;
  }
}

module.exports = calculateNumber;

/**
 * Module to contain a module.
 */

const Utils = {
  calculateNumber: function calculateNumber (type, a, b) {
    const newA = Math.round(a);
    const newB = Math.round(b);
    switch (type) {
      case 'SUM':
        return newA + newB;
      case 'SUBTRACT':
        return newA - newB;
      case 'DIVIDE':
        if (b === 0) { return 'Error'; }
        return newA / newB;
    }
  }
};


module.exports = Utils;

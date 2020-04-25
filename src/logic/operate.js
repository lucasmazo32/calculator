/* eslint-disable import/extensions */

import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  switch (operation) {
    case '÷':
      if (num2 === 0) {
        return 'Undefined';
      }
      return num1.div(num2);
    case 'X':
      return num1.times(num2);
    case '-':
      return num1.minus(num2);
    case '+':
      return num1.plus(num2);
    default:
      break;
  }
  return 'Syntax Error';
}

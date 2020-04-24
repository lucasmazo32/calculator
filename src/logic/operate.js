/* eslint-disable import/extensions */

import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  switch (operation) {
    case '÷':
      return num1 / num2;
    case 'X':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '=':
    default:
      break;
  }
  return num2;
}

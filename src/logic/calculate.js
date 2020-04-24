/* eslint-disable import/extensions */

import Big from 'big.js';
import operate from './operate';

export default function calculate(calculator, btnName) {
  let newTotal = Big(calculator.total);
  let newNext = Big(calculator.next);
  const { operation } = calculator;
  switch (btnName) {
    case '+/-':
      newTotal = -newTotal;
      newNext = -newNext;
      break;
    case 'AC':
      newTotal = 0;
      newNext = 0;
      break;
    case '%':
      newTotal /= 100;
      newNext /= 100;
      break;
    case '.':
      newTotal += '.';
      newNext += '.';
      break;
    default:
      newTotal = operate(newTotal, newNext, operation);
      break;
  }
  return newTotal;
}

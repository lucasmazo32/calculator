import Big from 'big.js';
import operate from './operate';

export default function calculate(calculator, btnName) {
  let newTotal = Big(calculator.newTotal);
  let newNext = Big(calculator.newNext);
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
    default:
      newTotal = operate(newTotal, newNext, operation);
      break;
  }
  return newTotal;
}

/* eslint-disable import/extensions */

import Big from 'big.js';
import operate from './operate';

export default function calculate(calculation, btnName) {
  const { next } = calculation;
  const opRegex = /[+\-÷X]/;
  const lengthRegex = /[+\-÷X]/g;
  const opRegexFirst = /[+÷X]/;
  const operatorRegex = /^-\d+\.*\d*[+\-÷X]/;
  const startingNegative = /^-\d+\.*\d*$/;
  const plusMinus = /^-*\d+\.*\d*[+\-÷X]/;
  const eqReg = /[+\-÷X]\.*\d+/;
  let newTotal = null;
  if (!plusMinus.test(next) && next !== '-') {
    newTotal = Big(next);
  }
  let newNext;
  const regEx = /^\d+\./;
  const decimalCond = /\d*\.\d*[+\-÷X]\d*$/;
  switch (btnName) {
    case '+/-':
      if (plusMinus.test(next)) {
        newNext = next;
      } else {
        newNext = newTotal.times(-1);
      }
      break;
    case 'AC':
      newNext = Big(0);
      break;
    case '%':
      if (opRegex.test(next)) {
        newNext = next;
      } else {
        newNext = newTotal.div(100);
      }
      break;
    case '.':
      if (regEx.test(next)) {
        if (decimalCond.test(next)) {
          newNext = `${next}.`;
        } else {
          newNext = next;
        }
      } else {
        newNext = `${next}.`;
      }
      break;
    case '=':
      if (next.match(eqReg)) {
        let pos;
        if (next.match(lengthRegex).length === 2) {
          pos = next.slice(1).match(new RegExp(`\\${next.match(lengthRegex)[1]}`)).index + 1;
        } else {
          pos = next.match(eqReg).index;
        }
        newNext = operate(next.slice(0, pos), next.slice(pos + 1), next.slice(pos, pos + 1));
      } else {
        newNext = next;
      }
      break;
    default:
      if (next === '0') {
        if (!opRegexFirst.test(btnName)) {
          newNext = btnName;
        } else {
          newNext = '0';
        }
      } else if (startingNegative.test(next)) {
        newNext = `${next}${btnName}`;
      } else if (operatorRegex.test(next)) {
        if (opRegex.test(btnName)) {
          newNext = next;
        } else {
          newNext = `${next}${btnName}`;
        }
      } else if (next === '-') {
        if (opRegex.test(btnName)) {
          newNext = next;
        } else {
          newNext = `${next}${btnName}`;
        }
      } else {
        newNext = `${next}${btnName}`;
      }
      break;
  }
  return newNext;
}

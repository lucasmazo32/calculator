import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const names = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

let count = 0;

function helper(array, handleClick) {
  count += 1;
  return (
    <div key={count} className="btn-container">
      {
        array.map(element => {
          if (element === array[array.length - 1]) {
            return <Button key={element} name={element} onClick={name => handleClick(name)} />;
          }
          if (element === '0') {
            return <Button key={element} name={element} onClick={name => handleClick(name)} color="#e1e1e1" wide />;
          }
          return <Button key={element} name={element} onClick={name => handleClick(name)} color="#e1e1e1" />;
        })
      }
    </div>
  );
}

export default function ButtonPanel({ onClick }) {
  const handleClick = onClick;
  return (
    <div>
      {
        names.map(subArray => helper(subArray, handleClick))
      }
    </div>
  );
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result }) {
  return (
    <span className="display">{result}</span>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

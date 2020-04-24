import React from 'react';
import PropTypes from 'prop-types';

function styleObj(wide, color) {
  if (wide) {
    return {
      backgroundColor: color,
      flexBasis: '50%',
    };
  }
  return {
    backgroundColor: color,
    flexBasis: '25%',
  };
}

export default function Button(props) {
  const { name } = props;
  const { color } = props;
  const { wide } = props;
  const btnStyle = styleObj(wide, color);
  return <button type="button" style={btnStyle}>{name}</button>;
}

Button.defaultProps = {
  color: '#f5913e',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

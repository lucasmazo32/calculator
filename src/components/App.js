import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  return (
    <span className="display">{props.result}</span>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

function Button(props) {
  return <button>{props.name}</button>;
}

Button.propTypes = {
  name: PropTypes.string,
};

function ButtonPanel() {
  return (
    <div>
      <div>
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" />
      </div>
      <div>
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="X" />
      </div>
      <div>
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </div>
      <div>
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </div>
      <div>
        <Button name="0" />
        <Button name="." />
        <Button name="=" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;

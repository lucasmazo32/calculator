import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div>
      <div className="btn-container">
        <Button name="AC" color="#e1e1e1" />
        <Button name="+/-" color="#e1e1e1" />
        <Button name="%" color="#e1e1e1" />
        <Button name="÷" />
      </div>
      <div className="btn-container">
        <Button name="7" color="#e1e1e1" />
        <Button name="8" color="#e1e1e1" />
        <Button name="9" color="#e1e1e1" />
        <Button name="X" />
      </div>
      <div className="btn-container">
        <Button name="4" color="#e1e1e1" />
        <Button name="5" color="#e1e1e1" />
        <Button name="6" color="#e1e1e1" />
        <Button name="-" />
      </div>
      <div className="btn-container">
        <Button name="1" color="#e1e1e1" />
        <Button name="2" color="#e1e1e1" />
        <Button name="3" color="#e1e1e1" />
        <Button name="+" />
      </div>
      <div className="btn-container">
        <Button name="0" color="#e1e1e1" wide />
        <Button name="." color="#e1e1e1" />
        <Button name="=" />
      </div>
    </div>
  );
}

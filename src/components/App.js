import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    const { total, next } = this.state;
    const result = calculate(total, next, buttonName);
    this.setState({
      total: next,
      operation: buttonName,
      next: result,
    });
  }

  render() {
    const { next } = this.state;
    return (
      <div className="container">
        <Display result={next || '0'} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;

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
    let { total, next } = this.state;
    const { operation } = this.state;
    if (total === null) {
      total = '0';
    }
    if (next === null || next === 'Undefined') {
      next = '0';
    }
    const result = calculate({ total, next, operation }, buttonName);
    this.setState({
      total: next,
      operation: buttonName,
      next: result.toString(),
    });
  }

  render() {
    const { next } = this.state;
    return (
      <div className="container">
        <Display result={next || '0'} />
        <ButtonPanel onClick={i => this.handleClick(i)} />
      </div>
    );
  }
}

export default App;

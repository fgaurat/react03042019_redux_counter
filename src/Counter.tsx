import React, { Component } from 'react';

class Counter extends Component<any,any> {
  render() {
    return (
    <>
        <button onClick={this.props.onClickIncrement}>Inc</button>
        <h1>{this.props.cpt}</h1>
        <button onClick={this.props.onClickDecrement}>Dec</button>
    </>
    );
  }
}

export default Counter;

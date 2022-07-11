import React, { Component } from 'react';

interface Props {}

interface State {
  count: number; 
}

export class Counter extends Component <Props, State>{
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    console.log('constructor');
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    alert(`componentDidMount ${this.state.count}`);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    alert(`componentDidUpdate, ${this.state.count}`);
    alert(`componentDidUpdate prev: ${prevState.count}`);
  }

  increment(): void {
    this.setState(({count}) => ({
      count: count + 1
    }));
  }

  decrement(): void {
    this.setState(({count}) => ({
      count: count - 1
    }));
  }

  render() {
    if(this.state.count === 5) {
      throw new Error(`I'm crashed`)
    }
    return (
      <>
        <button onClick={this.decrement}>minus</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>plus</button>
      </>
    );
  }
}
import React, { Component } from 'react';

export default class HandlerEx extends Component {
  state = {
    msg: 'Hello World!',
  };

  eventClick = () => {
    this.setState({ msg: 'Goodbye World!' });
  };
  render() {
    const { msg } = this.state;
    return (
      <div>
        <h1>{msg}</h1>
        <button onClick={this.eventClick}>click!</button>
      </div>
    );
  }
}

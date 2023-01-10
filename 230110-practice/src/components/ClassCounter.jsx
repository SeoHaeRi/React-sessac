import React, { Component } from 'react';

export default class ClassCounter extends Component {
  state = {
    num: 0,
  };
  render() {
    const { num } = this.state;
    return (
      <div>
        <h3>{num}</h3>
        <button
          onClick={() =>
            this.setState((prevState) => {
              return { num: prevState.num + 2 };
            })
          }
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                num: prevState.num - 1,
              };
            });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

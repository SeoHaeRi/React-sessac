import React, { Component } from 'react';

export default class ClassProps extends Component {
  render() {
    const { header, content } = this.props;
    return (
      <div>
        <h2>{header}</h2>
        <p>{content}</p>
        <hr />
      </div>
    );
  }
}

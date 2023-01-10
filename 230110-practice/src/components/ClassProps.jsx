import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClassProps extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <>
        <h1>{text}</h1>
        <button onClick={valid}>콘솔 메세지</button>
      </>
    );
  }
}

ClassProps.defaultProps = {
  text: '이건 기본 text props입니다.',
};

ClassProps.propTypes = {
  text: PropTypes.string.isRequired,
};

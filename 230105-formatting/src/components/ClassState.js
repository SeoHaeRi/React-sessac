import { Component } from 'react';

class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: 'lee',
    };
  }
  render() {
    const { teacher } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ teacher: 'tete' })}>
          닉네임
        </button>
        <br />
        <span>{teacher}</span>
      </div>
    );
  }
}

export default ClassState;

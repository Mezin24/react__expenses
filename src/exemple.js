import React, { Component } from 'react';

export default class Exemple extends Component {
  static defaultProps = {
    name: 'Pavel',
  };

  render() {
    return <div>{this.props.name}</div>;
  }
}

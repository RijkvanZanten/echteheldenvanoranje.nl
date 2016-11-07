import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class Event extends Component {
  render() {
    const { data } = this.props;
    return(
      <h2>{data.Naam}</h2>
    );
  }
}

export default Event;

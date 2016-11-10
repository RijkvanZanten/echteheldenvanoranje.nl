import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class BackButton extends Component {
  render() {
    return <button style={styles} onClick={() => history.back()}>&lt; Terug</button>
  }
}

const styles = {
  textTransform: 'uppercase',
  fontFamily: 'Nexa',
  display: 'block',
  margin: '1em 0',
  textDecoration: 'none',
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none'
}

export default BackButton;

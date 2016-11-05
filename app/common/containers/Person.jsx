import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class Person extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Rijk van Zanten</h1>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '5em'
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: 'Nexa',
    fontSize: '3em'
  },
};

export default Person;

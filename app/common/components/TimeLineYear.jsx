import React, { Component } from 'react';
import Radium from 'radium';

import TimeLineSection from './TimeLineSection';

@Radium
class TimeLineYear extends Component {
  render() {
    return (
      <ul style={styles.timeLine}>
        <li style={styles.year}>19<span style={styles.accent}>{this.props.year.substr(2)}</span></li>
        {Object.keys(this.props.yearData).map((m) => <TimeLineSection key={m} month={m} year={this.props.year}/>)}
      </ul>
    );
  }
}

const styles = {
  timeLine: {
    width: '40em',
    display: 'block',
    margin: 'auto',
    listStyle: 'none',
    textAlign: 'center',
    position: 'relative',
    padding: 0
  },
  year: {
    fontFamily: 'Nexa',
    fontSize: '5em',
    lineHeight: '80%',
    position: 'absolute',
    right: '35%',
    opacity: '.3'
  },
  accent: {
    display: 'block',
    color: '#ddac61'
  },
  labels: {
    width: '60%',
    margin: 'auto',
    justifyContent: 'center',
    fontFamily: 'Nexa',
    fontSize: '2em',
    textTransform: 'uppercase',
    position: 'sticky',
    top: '10px',
    zIndex: 1,
  },
  input: {
    appearance: 'none',
    textTransform: 'uppercase',
    width: '50%',
    border: 'none',
    textAlign: 'right',
    position: 'relative',
    right: '3.45em',
    backgroundColor: 'transparent',
    textShadow: '1px 1px 15px #2a2e32',
    ':focus': {
      outline: 0
    }
  },
  nlLabel: {
    position: 'relative',
    left: '3.4em',
  }
};

export default TimeLineYear;

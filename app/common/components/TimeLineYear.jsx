import React, { Component } from 'react';
import Radium from 'radium';

import TimeLineSection from './TimeLineSection';

@Radium
class TimeLineYear extends Component {
  constructor(props) {
    super(props);
    this.months = ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  }

  render() {
    return (
      <ul style={styles.timeLine}>
        <li style={styles.yearPos}><div style={styles.year}>19<span style={styles.accent}>{this.props.year.substr(2)}</span></div></li>
        {this.props.totalsYear.map((total, i) =>
          <TimeLineSection
            key={i}
            month={this.months[i]}
            year={this.props.year}
            totalsMonth={this.props.totalsYear[i]}
            people={this.props.people.filter((d) => d.death_month == i + 1)}
            eventsMonth={this.props.eventsYear.filter((d) => new Date(d.Datum).getMonth() === i)} />)}
      </ul>
    );
  }
}

const styles = {
  timeLine: {
    width: '100%',
    display: 'block',
    margin: 'auto',
    listStyle: 'none',
    textAlign: 'center',
    position: 'relative',
    padding: 0
  },
  yearPos: {
    position: 'absolute',
    right: '43.5%',
    height: '100%'
  },
  year: {
    fontFamily: 'Nexa',
    fontSize: '5em',
    lineHeight: '80%',
    opacity: '.3',
    position: 'sticky',
    top: '20px'
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

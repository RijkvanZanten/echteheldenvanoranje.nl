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
        {this.months.map((m, i) =>
          <TimeLineSection
            key={i}
            month={m}
            year={this.props.year}
            people={this.props.people.filter((d) => d.death_month == i + 1)}
            eventsMonth={this.props.eventsYear.filter((d) => new Date(d.Datum).getMonth() === i)}
            qleft={this.props.qleft}
            qright={this.props.qright}/>)}
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
  }
};

export default TimeLineYear;

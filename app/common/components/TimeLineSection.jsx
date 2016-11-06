import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const StyleLink = Radium(Link);

@Radium
class TimeLineSection extends Component {
  render() {
    let dots = [];
    for(let i = 0; i < this.props.totalsMonth / 100; i++) {
      dots.push(<span key={i} style={[styles.dotRight, styles.dot]}></span>);
    }
    return(
      <li style={styles.container}>
        <div style={styles.dotsSection}></div>
        <div style={styles.labelContainer}><span style={styles.label}>— {this.props.month} —</span></div>
        <div style={styles.dotsSection}>
          {dots}
        </div>
      </li>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'flex-start'
  },
  dotsSection: {
    flexBasis: 'calc(30% - 1em)',
    backgroundColor: '#363d41',
    padding: '1em'
  },
  labelContainer: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#9b9e9f',
    fontFamily: 'Nexa',
    textTransform: 'uppercase',
    padding: '1em'
  },
  label: {
    position: 'sticky',
    top: '20vh'
  },
  dot: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, .8)',
    margin: '5px',
  },
  dotRight: {
    float: 'left',
  }
};

export default TimeLineSection;

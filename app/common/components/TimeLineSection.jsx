import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getPeopleIfNeeded } from '../actions/people';

const StyleLink = Radium(Link);

@Radium
@connect()
class TimeLineSection extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPeopleIfNeeded(this.props.month, this.props.year));
  }

  render() {
    return(
      <li style={styles.container}>
        <div style={styles.dotsSection}>
        </div>
        <div style={styles.labelContainer}><span style={styles.label}>— {this.props.month} —</span></div>
        <div style={styles.dotsSection}></div>
      </li>
    );
  }
}

// {this.dummyData.map((d, i) => (<StyleLink key={i} to={'/persoon/' + d.id}><span style={[styles.dot, styles[d.type]]}></span></StyleLink>))}


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
    float: 'right',
    ':hover': {
      boxShadow: '0 0 4px 2px rgba(255, 255, 255, .8)'
    }
  },
  Militair: {
    backgroundColor: '#8fda62'
  },
  Verzet: {
    backgroundColor: '#daab62'
  },
  Sjoa: {
    backgroundColor: 'blue'
  }
};

export default TimeLineSection;

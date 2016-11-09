import React, { Component } from 'react';
import Radium, { keyframes } from 'radium';
import { Link } from 'react-router';

import Event from './Event.jsx';
const StyleLink = Radium(Link);

@Radium
class TimeLineSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePerson: {}
    };
  }
  showPerson(d) {
    this.setState({activePerson: d});
  }

  render() {
    const people = this.props.people.map((d) => {
      let mainCategory;
      let order;

      if(d.categories.indexOf('Militair') !== -1) {
        mainCategory = 'Militair';
        order = 1;
      } else if(d.categories.indexOf('Verzet') !== -1) {
        mainCategory = 'Verzet';
        order = 2;
      } else if(d.categories.indexOf('Sjoa') !== -1) {
        mainCategory = 'Sjoa';
        order = 3;
      } else {
        mainCategory = '';
        order = 4;
      }

      return {
        ...d,
        mainCategory,
        order
      };
    }).sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));

    const peopleLeft = people.filter((d) => d.place_of_birth.toLowerCase() === this.props.qleft || d.place_of_death.toLowerCase() === this.props.qleft);
    const peopleRight = people.filter((d) => d.place_of_birth.toLowerCase() === this.props.qright || d.place_of_death.toLowerCase() === this.props.qright);

    return(
      <li style={styles.container}>
        <div style={styles.event}>
          {this.props.eventsMonth.filter((d) => d.Location.indexOf(this.props.qleft) !== -1 || d.Location.indexOf('nederland') !== -1).map((d, i) => <Event position="left" key={i} data={d} />)}
        </div>
        <div style={styles.dotsSection}>
          {peopleLeft.map((d, i) => {
            const dotStyles = [{animation: `x .2s ${i * 100}ms forwards`}, styles.dotLeft, styles.dot];
            if(d.mainCategory === 'Militair') dotStyles.push(styles.greenDot);
            if(d.mainCategory === 'Verzet') dotStyles.push(styles.orangeDot);
            if(d.mainCategory === 'Sjoa') dotStyles.push(styles.blueDot);
            return <StyleLink onMouseOver={() => {this.showPerson(d);}} key={i} to={'persoon/' + d.id}><span style={dotStyles}></span></StyleLink>;
          })}
        </div>
        <div style={styles.labelContainer}><span>— {this.props.month} —</span></div>
        <div style={styles.dotsSection}>
          {peopleRight.map((d, i) => {
            const dotStyles = [{animation: `x .2s ${i * 100}ms forwards`}, styles.dotRight, styles.dot];
            if(d.mainCategory === 'Militair') dotStyles.push(styles.greenDot);
            if(d.mainCategory === 'Verzet') dotStyles.push(styles.orangeDot);
            if(d.mainCategory === 'Sjoa') dotStyles.push(styles.blueDot);
            return <StyleLink onMouseOver={() => {this.showPerson(d);}} key={i} to={'persoon/' + d.id}><span style={dotStyles}></span></StyleLink>;
          })}
        </div>
        <div style={styles.event}>
          {this.props.eventsMonth.filter((d) => d.Location.indexOf(this.props.qright) !== -1 || d.Location.indexOf('nederland') !== -1).map((d, i) => <Event position="right" key={i} data={d} />)}
        </div>
      </li>
    );
  }
}

const animateIn = keyframes({
  from: {
    transform: 'scale(0)',
  },
  to: {
    transform: 'scale(1)'
  }
});

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'flex-start'
  },
  dotsSection: {
    flexBasis: 'calc(15% - 1em)',
    backgroundColor: '#363d41',
    padding: '1em',
    flexShrink: 0
  },
  labelContainer: {
    flexBasis: '10%',
    textAlign: 'center',
    color: '#9b9e9f',
    fontFamily: 'Nexa',
    textTransform: 'uppercase',
    padding: '1em'
  },
  dot: {
    display: 'inline-block',
    transform: 'scale(0)',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, .8)',
    margin: '5px',
    animationName: animateIn
  },
  dotRight: {
    float: 'left',
  },
  dotLeft: {
    float: 'right'
  },
  greenDot: {
    backgroundColor: '#8fda62'
  },
  orangeDot: {
    backgroundColor: '#daab62'
  },
  blueDot: {
    backgroundColor: '#6e9fe9'
  },
  event: {
    flexBasis: '10%',
    flexShrink: 0,
    flexGrow: 1
  }
};

export default TimeLineSection;

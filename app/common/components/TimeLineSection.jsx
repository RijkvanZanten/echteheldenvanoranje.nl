import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

const StyleLink = Radium(Link);

@Radium
class TimeLineSection extends Component {
  render() {
    let dots = [];
    for(let i = 0; i < this.props.totalsMonth / 10; i++) {
      dots.push(<span key={i} style={[styles.dotRight, styles.dot]}></span>);
    }
    return(
      <li style={styles.container}>
        <div style={styles.dotsSection}>
          {this.props.people.map((d, i) => {
            const dotStyles = [styles.dotLeft, styles.dot];
            if(d.categories.indexOf('Militair') !== -1) dotStyles.push(styles.greenDot);
            if(d.categories.indexOf('Verzet') !== -1) dotStyles.push(styles.orangeDot);
            if(d.categories.indexOf('Sjoa') !== -1) dotStyles.push(styles.blueDot);
            return <StyleLink key={i} to={'persoon/' + d.id}><span style={dotStyles}></span></StyleLink>;
          })}
        </div>
        <div style={styles.labelContainer}><span>— {this.props.month} —</span></div>
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
  }
};

export default TimeLineSection;

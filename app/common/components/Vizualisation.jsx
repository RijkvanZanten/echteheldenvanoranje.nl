import React, { Component } from 'react';
import TimeLineYear from './TimeLineYear';
import { connect } from 'react-redux';
import Radium from 'radium';

const mapStateToProps = function(state) {
  return {
    people: state.people
  };
};

@Radium
@connect(mapStateToProps)
class Vizualisation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <div style={styles.labels}>
          <input style={styles.input} type="text" />
          <span style={styles.nlLabel}>Nederland</span>
        </div>
        {Object.keys(this.props.people).map((y, i) =>
          <TimeLineYear year={y} key={i} yearData={this.props.people[y]}/>
        )}
      </div>
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

export default Vizualisation;
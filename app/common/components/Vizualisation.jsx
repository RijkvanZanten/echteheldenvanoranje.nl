import React, { Component } from 'react';
import TimeLineYear from './TimeLineYear';
import Radium from 'radium';
import { connect } from 'react-redux';
import DebounceInput from 'react-debounce-input';

import { getTotals } from '../actions/totals';
import { getLocalIfNeeded } from '../actions/people';

const StyleDebounceInput = Radium(DebounceInput);

const mapStateToProps = function(state) {
  return {
    totals: state.totals
  };
};

@Radium
@connect(mapStateToProps)
class Vizualisation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTotals());
  }

  getLocalData(locationName) {
    const { dispatch } = this.props;
    dispatch(getLocalIfNeeded(locationName));
  }

  render() {
    const { totals } = this.props;
    return(
      <div>
        <div style={styles.labels}>
          <StyleDebounceInput
            minLength={5}
            debounceTimeout={500}
            onChange={(e) => this.getLocalData(e.target.value)}
            style={styles.input}
            type="text"
            placeholder="voer plaats in" />

          <span style={styles.nlLabel}>Nederland</span>
        </div>
        {Object.keys(totals.years).map((y, i) => {
          return <TimeLineYear year={y} key={i} totalsYear={this.props.totals.years[y]}/>;
        }
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

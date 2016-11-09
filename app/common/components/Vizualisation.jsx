import React, { Component } from 'react';
import TimeLineYear from './TimeLineYear';
import Radium from 'radium';
import { connect } from 'react-redux';
import DebounceInput from 'react-debounce-input';

import YearButtons from '../components/YearButtons';

import { getLocalIfNeeded } from '../actions/people';
import { getEventsIfNeeded } from '../actions/events';
import { getDefaultEventsIfNeeded } from '../actions/defaultEvents';

const StyleDebounceInput = Radium(DebounceInput);

const mapStateToProps = function(state) {
  return {
    totals: state.totals,
    people: state.people,
    events: state.events
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
    dispatch(getDefaultEventsIfNeeded());
    dispatch(getEventsIfNeeded());
    dispatch(getLocalIfNeeded(this.props.people.qleft, 'left'));
    dispatch(getLocalIfNeeded(this.props.people.qright, 'right'));
  }

  getLocalData(locationName, timeline) {
    const { dispatch } = this.props;
    dispatch(getLocalIfNeeded(locationName, timeline));
  }

  render() {
    const { people } = this.props;
    const filteredPeople = [];

    let y = this.props.year;

    Object.keys(people.people).forEach((id) => {
      if(
        people.people[id].place_of_birth.toLowerCase() === people.qleft.toLowerCase()
        || people.people[id].place_of_birth.toLowerCase() === people.qright.toLowerCase()
        || people.people[id].place_of_death.toLowerCase() === people.qleft.toLowerCase()
        || people.people[id].place_of_death.toLowerCase() === people.qright.toLowerCase()
      ) filteredPeople.push(people.people[id]);
    });

    return(
      <div>
        <div style={styles.labels}>
          <StyleDebounceInput
            minLength={5}
            debounceTimeout={1000}
            onChange={(e) => this.getLocalData(e.target.value, 'left')}
            style={[styles.input, styles.inputLeft]}
            type="text"
            placeholder={this.props.people.qleft} />

          <StyleDebounceInput
            minLength={5}
            debounceTimeout={1000}
            onChange={(e) => this.getLocalData(e.target.value, 'right')}
            style={[styles.input, styles.inputRight]}
            type="text"
            placeholder={this.props.people.qright} />
        </div>
        <TimeLineYear
          year={`${y}`}
          eventsYear={this.props.events.items.filter((d) => new Date(d.Datum).getFullYear() === y)}
          people={filteredPeople.filter((d) => d.death_year === `${y}`)}
          qleft={this.props.people.qleft}
          qright={this.props.people.qright}/>
        <YearButtons year={y} />
      </div>
    );
  }
}

const styles = {
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
    position: 'relative',
    backgroundColor: 'transparent',
    textShadow: '1px 1px 15px #2a2e32',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderBottom: '1px solid white',
    ':focus': {
      outline: 0
    }
  },
  inputLeft: {
    textAlign: 'right',
    right: '8.3%'
  },
  inputRight: {
    textAlign: 'left',
    left: '8.3%'
  }
};

export default Vizualisation;

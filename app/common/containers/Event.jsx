import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import BackButton from '../components/BackButton';

const mapStateToProps = function(state) {
  return {
    events: state.events
  };
};

@Radium
@connect(mapStateToProps)
class Event extends Component {
  constructor(props) {
    super(props);
    this.months = ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  }
  render() {
    const id = this.props.params.id;
    const event = this.props.events.items.filter((d) => d.id == id).map((d) => {
      return {
        ...d,
        Datum: new Date(d.Datum)
      };
    })[0];

    return (
      <div style={styles.container}>
        <BackButton />
        <h1 style={styles.title}>{event.Naam}</h1>
        <h2 style={styles.date}>{event.Datum.getDate()} {this.months[event.Datum.getMonth()]} {event.Datum.getFullYear()}</h2>
        <p style={styles.info}>{event.Info}</p>
        <img style={styles.img} src={'http://cms.verledenverteld.nl/' + event.Foto.url} />
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '5em',
    position: 'relative'
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: 'Nexa',
    fontSize: '2.5em',
    marginBottom: 0
  },
  date: {
    textTransform: 'uppercase',
    fontFamily: 'Nexa',
    fontSize: '2em',
    color: '#949799',
    marginTop: 0
  },
  info: {
    maxWidth: '50%',
    fontSize: '.9em',
    whiteSpace: 'pre-wrap',
    lineHeight: '1.5'
  },
  img: {
    position: 'absolute',
    opacity: '.4',
    top: '5em',
    right: '5em',
    zIndex: -1,
    maxWidth: '60%'
  }
};

export default Event;

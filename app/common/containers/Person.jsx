import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  return {
    people: state.people.people
  };
};

@Radium
@connect(mapStateToProps)
class Person extends Component {
  constructor(props) {
    super(props);
    this.months = ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  }
  render() {
    const id = this.props.params.id;
    const person = this.props.people[Object.keys(this.props.people).filter((d) => this.props.people[d].id == id)];

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>{person.name}</h1>
        <h2 style={styles.age}>{person.birth_day} {this.months[person.birth_month - 1]} {person.birth_year} — {person.death_day} {this.months[person.death_month - 1]} {person.death_year}</h2>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '5em'
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: 'Nexa',
    fontSize: '3em',
    marginBottom: 0
  },
  age: {
    textTransform: 'uppercase',
    fontFamily: 'Nexa',
    fontSize: '2em',
    color: '#949799',
    marginTop: 0
  }
};

export default Person;

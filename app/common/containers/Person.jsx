import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  return {
    people: state.people.people
  };
};

@connect(mapStateToProps)
@Radium
class Person extends Component {
  constructor(props) {
    super(props);
    this.months = ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  }
  render() {
    const id = this.props.params.id;
    const person = this.props.people[Object.keys(this.props.people).filter((d) => this.props.people[d].id == id)];

    let mainCategory;

    if(person.categories.indexOf('Militair') !== -1) {
      mainCategory = 'Militair';
    } else if(person.categories.indexOf('Verzet') !== -1) {
      mainCategory = 'Verzet';
    } else if(person.categories.indexOf('Sjoa') !== -1) {
      mainCategory = 'Sjoa';
    } else {
      mainCategory = 'Burger';
    }

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>{person.name} <p style={[styles.category, styles[mainCategory]]}>{mainCategory}</p></h1>
        <p style={styles.sublabel}>{person.birth_day} {this.months[person.birth_month - 1]} {person.birth_year} — {person.death_day} {this.months[person.death_month - 1]} {person.death_year} ({person.death_year - person.birth_year} jaar oud)</p>
        <p style={styles.sublabel}>{person.place_of_birth} — {person.place_of_death}</p>
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
    fontSize: '2.5em',
    marginBottom: 0
  },
  sublabel: {
    textTransform: 'uppercase',
    fontFamily: 'Nexa',
    fontSize: '1.5em',
    color: '#949799',
    margin: 0
  },
  category: {
    display: 'inline-block',
    fontSize: '.5em',
    verticalAlign: 'baseline'
  },
  Militair: {
    color: '#8fda62'
  },
  Verzet: {
    color: '#daab62'
  },
  Sjoa: {
    color: '#6e9fe9'
  },
  Burger: {
    opacity: '.5'
  }
};

export default Person;

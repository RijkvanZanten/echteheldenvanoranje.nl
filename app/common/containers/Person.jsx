import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Map from '../components/Map';
import BackButton from '../components/BackButton';

const StyleLink = Radium(Link);

const mapStateToProps = function(state) {
  return {
    people: state.people.people,
    events: state.events,
    defaultEvents: state.defaultEvents
  };
};

@connect(mapStateToProps)
@Radium
class Person extends Component {
  constructor(props) {
    super(props);
    this.months = ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  }

  renderContent() {
    const id = this.props.params.id;
    const person = this.props.people[Object.keys(this.props.people).filter((d) => this.props.people[d].id == id)];

    if(person.categories.indexOf('Militair') !== -1) {
      person.mainCategory = 'Militair';
    } else if(person.categories.indexOf('Verzet') !== -1) {
      person.mainCategory = 'Verzet';
    } else if(person.categories.indexOf('Sjoa') !== -1) {
      person.mainCategory = 'Sjoa';
    } else {
      person.mainCategory = 'Burger';
    }

    let event =
      this.props.events.items
        .filter((d) => d.Person_category.indexOf(person.mainCategory.toLowerCase()) !== -1) // by category
        .filter((d) => d.Location.indexOf(person.place_of_death.toLowerCase()) !== -1)
        .filter((d) => new Date(d.Datum).getFullYear() === +person.death_year) // by year
        .filter((d) => new Date(d.Datum).getMonth() + 1 === +person.death_month);// by month

    return (
      <div style={styles.container}>
        <BackButton />
        <h1 style={styles.title}>{person.name} <p style={[styles.category, styles[person.mainCategory]]}>{person.mainCategory}</p></h1>
        <p style={styles.sublabel}>{person.birth_day} {this.months[person.birth_month - 1]} {person.birth_year} — {person.death_day} {this.months[person.death_month - 1]} {person.death_year} ({person.death_year - person.birth_year} jaar oud)</p>
        <p style={styles.sublabel}>{person.place_of_birth} — {person.place_of_death}</p>
        {(() => {
          if(event.length > 0) return (
            <div style={styles.info}>
              <h3>{event[0].Naam}</h3>
              <p>{event[0].Info.substr(0, 500)}...</p>
              <StyleLink style={styles.link} to={'/event/' + event[0].id}>&gt; Lees meer</StyleLink>
              <img style={styles.img} src={'http://cms.verledenverteld.nl/' + event[0].Foto.url} />
            </div>
          );
          else {
            event = this.props.defaultEvents.items.filter((d) => d.Categorie.toLowerCase() === person.mainCategory.toLowerCase());
            return (
            <div style={styles.info}>
              <h3>{event[0].Naam}</h3>
              <p>{event[0].Info}</p>
              <img style={styles.img} src={'http://cms.verledenverteld.nl/' + event[0].Foto.url} />
            </div>
          );}
        })()}

        {(() => {
          if(person.place_of_death_latlong.length === 2 && person.place_of_birth_latlong.length === 2) {
            return <Map person={person} />;
          }
        })()}
      </div>
    );
  }

  render() {
    if(Object.keys(this.props.people).length === 0) {
      return <div>loading</div>;
    } else {
      return this.renderContent();
    }
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
  },
  info: {
    width: '50%',
    whiteSpace: 'pre-wrap',
    marginTop: '5em'
  },
  img: {
    position: 'absolute',
    top: '5em',
    right: '5em',
    opacity: '.5',
    zIndex: -1,
    maxWidth: '40%'
  },
  link: {
    textTransform: 'uppercase',
    fontFamily: 'Nexa',
    display: 'block',
    margin: '1em 0',
    textDecoration: 'none',
    color: 'white'
  }
};

export default Person;

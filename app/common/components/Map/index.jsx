/* global AmCharts */
import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { connect } from 'react-redux';

import mapSettings, { birth, death } from './mapSettings';

const mapStateToProps = function(state) {
  return {
    people: state.people.people
  };
};

@connect(mapStateToProps)
@Radium
class Map extends Component {
  componentDidMount() {
    const { people, person } = this.props;

    const filteredPeople = Object.keys(people).filter((key) =>
      people[key].place_of_death === person.place_of_death &&
      people[key].place_of_birth_latlong.length === 2 &&
      people[key].place_of_death_latlong.length === 2 &&
      people[key].death_year === person.death_year
    );

    AmCharts.makeChart('map', {
      ...mapSettings,
      listeners: [{
        event: 'clickMapObject',
        method: (event) => {
          this.props.history.push(event.mapObject.url);
        }
      }],
      dataProvider: {
        ...mapSettings.dataProvider,
        lines: [
          {
            latitudes: [+person.place_of_birth_latlong[0], +person.place_of_death_latlong[0]],
            longitudes: [+person.place_of_birth_latlong[1], +person.place_of_death_latlong[1]]
          },
          ...filteredPeople.map((key) => {
            return {
              latitudes: [+people[key].place_of_birth_latlong[0], +people[key].place_of_death_latlong[0]],
              longitudes: [+people[key].place_of_birth_latlong[1], +people[key].place_of_death_latlong[1]]
            };
          })
        ],
        images: [
          {
            svgPath: birth,
            title: this.props.person.name,
            latitude: +person.place_of_birth_latlong[0],
            longitude: +person.place_of_birth_latlong[1],
            scale: 0.5
          },
          {
            svgPath: death,
            title: this.props.person.place_of_death,
            latitude: +person.place_of_death_latlong[0],
            longitude: +person.place_of_death_latlong[1],
            scale: 0.5
          },
          ...filteredPeople.map((key) => {
            return {
              svgPath: birth,
              title: people[key].name,
              latitude: +people[key].place_of_birth_latlong[0],
              longitude: +people[key].place_of_birth_latlong[1],
              scale: 0.5,
              url: `/persoon/${people[key].id}`
            };
          })
        ],
      }
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <Style rules={styles.override} />
        <h2>Andere personen die zijn overleden in {this.props.person.place_of_death} in {this.props.person.death_year}</h2>
        <div style={styles.map} id="map"></div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: '5em',
  },
  override: {
    'a[href="http://www.amcharts.com/javascript-maps/"]': {
      display: 'none !important'
    }
  },
  map: {
    width: '100%',
    height: '500px',
    backgroundColor: '#2a2e32'
  }
};

export default Map;

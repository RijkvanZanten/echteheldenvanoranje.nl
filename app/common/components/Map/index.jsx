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

    // const filteredPeople = people.filter((d) => d.place_of_death === person.place_of_death);

    AmCharts.makeChart('map', {
      ...mapSettings,
      dataProvider: {
        ...mapSettings.dataProvider,
        lines: [
          {
            latitudes: [+person.place_of_birth_latlong[0], +person.place_of_death_latlong[0]],
            longitudes: [+person.place_of_birth_latlong[1], +person.place_of_death_latlong[1]]
          }
        ],
        images: [
          {
            svgPath: birth,
            title: this.props.person.place_of_birth,
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
          }
        ],
      }
    });
  }

  render() {
    return (
      <div>
        <Style rules={styles.override} />
        <div style={styles.map} id="map"></div>
      </div>
    );
  }
}

const styles = {
  override: {
    'a[href="http://www.amcharts.com/javascript-maps/"]': {
      display: 'none !important'
    }
  },
  map: {
    width: '100%',
    height: '500px',
    marginTop: '3em',
    backgroundColor: '#2a2e32'
  }
};

export default Map;

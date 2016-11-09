/* global AmCharts */
import React, { Component } from 'react';
import Radium from 'radium';

import mapSettings from './mapSettings';

@Radium
class Map extends Component {
  componentDidMount() {
    AmCharts.makeChart('map', mapSettings);
  }

  render() {
    return (<div style={styles.map} id="map"></div>);
  }
}

const styles = {
  map: {
    width: '100%',
    height: '500px'
  }
};

export default Map;

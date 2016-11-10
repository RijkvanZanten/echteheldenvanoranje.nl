/* global AmCharts */
import React, { Component } from 'react';
import Radium, { Style } from 'radium';

import mapSettings, { targetSVG } from './mapSettings';

@Radium
class Map extends Component {
  componentDidMount() {
    AmCharts.makeChart('map', {
      ...mapSettings,
      dataProvider: {
        ...mapSettings.dataProvider,
        lines: [
          {
            latitudes: [ 51.5002, 50.4422 ],
            longitudes: [ -0.1262, 30.5367 ]
          }
        ],
        images: [
          {
            svgPath: targetSVG,
            title: 'Brussels',
            latitude: 50.4422,
            longitude: 30.5367,
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
    marginTop: '3em'
  }
};

export default Map;

export const birth = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';
export const death = 'M0,8H8V0H12V8H20V12H12V28H8V12H0V8Z';


const settings = {
  type: 'map',
  theme: 'light',
  dataProvider: {
    map: 'worldHigh',
    zoomLevel: 40,
    zoomLongitude: 5.291266,
    zoomLatitude: 52.132633,
  },
  areasSettings: {
    unlistedAreasColor: '#363d41',
    unlistedAreasAlpha: 0.9
  },
  imagesSettings: {
    color: 'white',
    rollOverColor: 'white',
    selectedColor: 'white'
  },
  linesSettings: {
    arc: -0.7,
    arrow: 'middle',
    color: 'white',
    alpha: 0.4,
    arrowAlpha: 1,
    arrowSize: 4,
  },
  zoomControl: {
    gridHeight: 100,
    draggerAlpha: 1,
    gridAlpha: 0.2
  },
  backgroundZoomsToTop: true,
  linesAboveImages: true,
  export: {
    enabled: false
  }
};

export default settings;

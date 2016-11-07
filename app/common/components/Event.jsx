import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class Event extends Component {
  render() {
    const { data } = this.props;
    return(
      <div style={styles.container}>
        <img style={styles.img} src={'http://cms.verledenverteld.nl/' + data.Foto.url} />
        <h2 style={styles.title}>{data.Naam}</h2>
        <p style={styles.text}>{data.Info.substr(0, 150)}...</p>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'left',
    padding: '0 3em 0 1em',
    marginBottom: '6.5em',
    position: 'relative'
  },
  title: {
    fontFamily: 'Nexa',
    textTransform: 'uppercase',
    fontSize: '1.2em',
    marginBottom: 0
  },
  text: {
    fontSize: '.8em',
    margin: 0,
  },
  img: {
    position: 'absolute',
    opacity: '.3',
    width: '60%',
    top: '-1em',
    right: '2em',
    zIndex: '-1'
  }
};

export default Event;

import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

const StyleLink = Radium(Link);

@Radium
class Event extends Component {
  render() {
    const { data, position } = this.props;
    return(
      <div style={[styles.container, styles['container' + position]]}>
        <StyleLink style={styles.link} to={`/event/${data.id}`}>
          <img style={[styles.img, styles['img' + position]]} src={'http://cms.verledenverteld.nl/' + data.Foto.url} />
          <h2 style={styles.title}>{data.Naam}</h2>
          <p style={styles.text}>{data.Info.substr(0, 150)}...</p>
          <span style={styles.cta}>> Lees meer</span>
        </StyleLink>
      </div>
    );
  }
}

const styles = {
  container: {
    marginBottom: '6.5em',
    position: 'relative',
    opacity: '.4',
    transition: 'opacity .3s',
    ':hover': {
      opacity: '1'
    }
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
    zIndex: '-1'
  },
  imgleft: {
    left: '2em',
  },
  imgright: {
    right: '2em'
  },
  containerleft: {
    textAlign: 'right',
    padding: '0 1em 0 3em',
  },
  containerright: {
    textAlign: 'left',
    padding: '0 3em 0 1em',
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  cta: {
    textTransform: 'uppercase',
    fontFamily: 'Nexa',
    display: 'block',
    margin: '1em 0'
  }
};

export default Event;

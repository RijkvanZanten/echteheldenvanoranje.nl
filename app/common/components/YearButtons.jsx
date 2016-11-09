import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

const StyleLink = Radium(Link);

@Radium
class YearButtons extends Component {
  render() {
    const yearBack = `${+this.props.year - 1}`;
    const yearFront = `${+this.props.year + 1}`;


    return (
      <div style={styles.container}>
        {(() => {
          if(this.props.year > 1940) return <StyleLink style={styles.link} to={`/year/${yearBack}`}>&lt; {yearBack}</StyleLink>;
        })()}
        {(() => {
          if(this.props.year < 1945) return <StyleLink style={styles.link} to={`/year/${yearFront}`}>{yearFront} &gt;</StyleLink>;
        })()}
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
    margin: '2em'
  },
  link: {
    margin: '0 12%',
    fontSize: '2rem',
    fontFamily: 'nexa',
    color: 'white',
    opacity: '.4',
    textDecoration: 'none',
    transition: 'opacity .3s ease',
    ':hover': {
      opacity: '1'
    }
  }
};

export default YearButtons;

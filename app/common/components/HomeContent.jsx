import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class HomeContent extends Component {
  render() {
    const lifeCount = '167.067';
    const storyCount = '42.014';

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Verleden<br/>Verteld</h1>
        <ul style={styles.list}>
          <li style={styles.listItem}><span style={styles.accent}>{lifeCount}</span> levens</li>
          <li style={styles.listItem}><span style={styles.accent}>{storyCount}</span> verhalen</li>
        </ul>
        <div style={styles.divider}></div>
        <p style={styles.paragraph}>Aan het einde van de Tweede Wereldoorlog heerst er een groot verdriet. Duizenden Nederlanders zijn omgekomen in vernietigingskampen of zijn gestorven als militair onder Hitlers regime. Om hun verhalen niet te vergeten is het belangrijk dat het verleden verteld wordt.</p>
        <ul style={styles.legend}>
          <li><span style={styles.dot}></span> Burger</li>
          <li><span style={[styles.dot, styles.verzet]}></span> Verzet</li>
          <li><span style={[styles.dot, styles.militair]}></span> Militair</li>
          <li><span style={[styles.dot, styles.sjoa]}></span> Sjoa</li>
        </ul>
      </div>
    );
  }
}

const styles = {
  legend: {
    listStyle: 'none',
    padding: 0,
    width: '30%',
    lineHeight: '180%',
    fontSize: '.9em'
  },
  dot: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, .8)',
    margin: '5px',
  },
  verzet: {
    backgroundColor: '#daab62'
  },
  sjoa: {
    backgroundColor: '#6e9fe9'
  },
  militair: {
    backgroundColor: '#8fda62'
  },
  container: {
    padding: '5em'
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: 'Nexa',
    fontSize: '3em'
  },
  divider: {
    borderBottom: '5px solid #949799',
    width: '5em',
    margin: '2em 0'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    textTransform: 'uppercase',
    fontFamily: 'Nexa',
  },
  listItem: {
    fontSize: '2.5em'
  },
  accent: {
    color: '#ebb765'
  },
  paragraph: {
    width: '30%',
    lineHeight: '180%',
    fontSize: '.9em'
  }
};

export default HomeContent;

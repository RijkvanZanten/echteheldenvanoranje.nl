import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class HomeContent extends Component {
  render() {
    const lifeCount = 189131;
    const storyCount = 42014;

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Verleden<br/>Verteld</h1>
        <ul style={styles.list}>
          <li style={styles.listItem}><span style={styles.accent}>{lifeCount}</span> levens</li>
          <li style={styles.listItem}><span style={styles.accent}>{storyCount}</span> verhalen</li>
        </ul>
        <div style={styles.divider}></div>
        <p style={styles.paragraph}>Aan het einde van de Tweede Wereldoorlog heerst er een groot verdriet. Duizenden Nederlanders zijn omgekomen in vernietigingskampen of zijn gestorven als militair onder Hitlers regime. Om hun verhalen niet te vergeten is het belangrijk dat het verleden verteld wordt.</p>
      </div>
    );
  }
}

const styles = {
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
    width: '50%',
    lineHeight: '150%',
    fontSize: '.9em'
  }
};

export default HomeContent;

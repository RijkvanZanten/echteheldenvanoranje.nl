import React, { Component } from 'react';

import HomeContent from '../components/HomeContent';
import BackgroundImage from '../components/BackgroundImage';

class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <BackgroundImage />
        <HomeContent />
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#2a2e32',
    minHeight: '100vh',
    width: '100vw'
  }
};

export default Home;

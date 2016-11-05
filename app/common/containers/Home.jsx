import React, { Component } from 'react';

import HomeContent from '../components/HomeContent';
import BackgroundImage from '../components/BackgroundImage';

class Home extends Component {
  render() {
    return (
      <div>
        <BackgroundImage/>
        <HomeContent/>
      </div>
    );
  }
}

export default Home;

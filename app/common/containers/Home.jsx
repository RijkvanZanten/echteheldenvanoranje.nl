import React, { Component } from 'react';

import HomeContent from '../components/HomeContent';
import BackgroundImage from '../components/BackgroundImage';
import Vizualisation from '../components/Vizualisation';

class Home extends Component {
  render() {
    return (
      <div>
        <BackgroundImage/>
        <HomeContent/>
        <Vizualisation/>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import Radium from 'radium';

import i500 from './imgset/500.png';
import i589 from './imgset/589.png';
import i671 from './imgset/671.png';
import i745 from './imgset/745.png';
import i1280 from './imgset/1280.png';

@Radium
class BackgroundImage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img
          style={styles.img}
          sizes="(max-width: 1280px) 100vw, 1280px"
          srcSet={`
            ${i500} 200w,
            ${i589} 581w,
            ${i671} 836w,
            ${i745} 1044w,
            ${i1280} 1239w
          `}
          src={i1280}
          alt=""/>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    width: '100vw',
    zIndex: '-1'
  },
  img: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  }
};

export default BackgroundImage;

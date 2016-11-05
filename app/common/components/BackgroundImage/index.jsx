import React, { Component } from 'react';
import Radium from 'radium';

import i200 from './imgset/200.png';
import i581 from './imgset/581.png';
import i836 from './imgset/836.png';
import i1044 from './imgset/1044.png';
import i1239 from './imgset/1239.png';
import i1400 from './imgset/1400.png';

@Radium
class BackgroundImage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcSet={`
            ${i200} 200w,
            ${i581} 581w,
            ${i836} 836w,
            ${i1044} 1044w,
            ${i1239} 1239w,
            ${i1400} 1400w,
          `}
          src={i1400}
          alt=""/>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'relative',
    width: '100vw'
  },
  img: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  }
};

export default BackgroundImage;

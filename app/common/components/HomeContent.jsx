import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class HomeContent extends Component {
  render() {
    const storyCount = 189131;

    return (
      <div>
        <h1>Verleden Verteld</h1>
        <ul>
          <li><span>{storyCount}</span> personen</li>
        </ul>
      </div>
    );
  }
}

export default HomeContent;

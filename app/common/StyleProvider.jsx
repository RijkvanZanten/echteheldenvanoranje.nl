import React, { Component } from 'react';
import { StyleRoot, Style } from 'radium';

import globalStyles from './globalStyles';

class StyleProvider extends Component {
  static displayName = 'MocoMuseum'

  render() {
    const { children } = this.props;
    return (
      <StyleRoot radiumConfig={{ userAgent: this.props.userAgent }}>
        <Style rules={globalStyles} />
        {children}
      </StyleRoot>
    );
  }
}

export default StyleProvider;

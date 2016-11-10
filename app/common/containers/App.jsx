import React, { Component } from 'react';
import Helmet from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'nl' }}
          defaultTitle="Verleden Verteld"
          titleTemplate="%s | Verleden Verteld"
          meta={[
            { name: 'charset', content: 'utf-8' },
            { name: 'theme-color', content: '#2a2e32' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: '' },
            { property: 'og:locale', content: 'nl'},
            { property: 'og:url', content: 'http://verledenverteld.nl' },
            { property: 'og:site_name', content: 'Verleden Verteld' },
            { property: 'og:title', content: 'Verleden Verteld' },
            { property: 'og:type', content: 'article' },
          ]} />
        {this.props.children}
      </div>
    );
  }
}

export default App;

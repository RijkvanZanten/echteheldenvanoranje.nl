import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import StyleProvider from '../common/StyleProvider';
import configureStore from '../common/configureStore';
import routes from '../common/routes';
import assets from '../../build/assets.json';

const dev = process.env.NODE_ENV !== 'production';

const renderFullPage = function(dev, html, head, vendor, app, manifest) {
  let script = `
  <script>
    [
      '/${manifest.js}',
      '/${vendor.js}',
      '/${app.js}'
    ].forEach(function(src) {
      var script = document.createElement('script');
      script.src = src;
      script.async = false;
      document.head.appendChild(script);
    });
  </script>`;

  if(dev) script = '<script src="bundle.js" async></script>';

  return `
    <!doctype html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
      </head>
      <body>
        <div id="app">${html}</div>
        ${script}
      </body>
    </html>
  `;
};

export default function handleRender(req, res) {
  match({ routes, location: req.url }, (err, redirect, props) => {
    // Internal server error
    if(err) {
      res.status(500).send(err.message);
    }

    // On redirect
    else if(redirect) {
      res.redirect(redirect.pathname + redirect.search);
    }

    // Valid request
    else if(props) {
      props.userAgent = req.headers['user-agent'];

      const store = configureStore();

      const html = renderToStaticMarkup(
        <StyleProvider userAgent={req.headers['user-agent']}>
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>
        </StyleProvider>
      );
      const head = Helmet.rewind();
      const { vendor, app, manifest } = assets;
      res.send(renderFullPage(dev, html, head, vendor, app, manifest));
    }

    // 404 route not found
    else {
      res.status(404).send('404 Not found');
    }
  });
}

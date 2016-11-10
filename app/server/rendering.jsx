import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import Helmet from 'react-helmet';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import StyleProvider from '../common/StyleProvider';
import reducer from '../common/reducers';
import routes from '../common/routes';
import assets from '../../build/assets.json';

const dev = process.env.NODE_ENV !== 'production';

const renderFullPage = function(dev, html, head, vendor, app, manifest) {
  let script = `<script>["/${manifest.js}","/${vendor.js}","/${app.js}"].forEach(function(a){var b=document.createElement("script");b.src=a,b.async=!1,document.head.appendChild(b)});</script>`;

  /**
   * Niet geminifiede versie van bovenstaand:
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
   */

  if(dev) script = '<script src="/bundle.js" async></script>';

  return `
    <!doctype html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
        <script src="https://www.amcharts.com/lib/3/maps/js/worldHigh.js"></script>
        <script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
        <script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
        <link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
        <link rel="manifest" href="/manifest.json">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000">
        <meta name="msapplication-TileImage" content="/mstile-144x144.png">
        <meta name="msapplication-TileColor" content="#000000">
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

      const store = createStore(reducer);

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

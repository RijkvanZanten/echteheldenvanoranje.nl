import express from 'express';
import path from 'path';
import compression from 'compression';
import handleRender from './rendering';
import http from 'http';
import socketListen from './socketActions';

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const app = express();

const server = http.Server(app);
socketListen(server);

app.use(compression());

app.use(express.static(path.join(__dirname, '..', '..', 'build', 'client'), {
  index: false,
  maxage: 604800000
}));

if(process.env.NODE_ENV !== 'production') {
  app.use(require('./devServer'));
}

app.use(handleRender);

server.listen(port, host, () => {
  console.log(`Server started at ${host}: ${port}`); // eslint-disable-line
});

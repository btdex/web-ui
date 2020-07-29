import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import {createProxyMiddleware} from 'http-proxy-middleware';

const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

polka()
  .use(
    createProxyMiddleware('/api', {
        changeOrigin: true,
        logLevel: 'debug',
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api': '/api/v1'
        },
      }
    ),
    compression({threshold: 0}),
    sirv('static', {dev}),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });

import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import {createProxyMiddleware} from 'http-proxy-middleware';
import {i18nMiddleware} from "./features/i18n/i18nMiddleware";

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
    i18nMiddleware(),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });

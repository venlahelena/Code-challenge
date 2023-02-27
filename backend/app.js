const bodyParser = require('body-parser');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

var cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Set up the proxy middleware
const proxy = createProxyMiddleware({
  target: 'https://agify.io',
  changeOrigin: true,
});

// Proxy requests to the agify.io API through our middleware
app.use('/proxy', proxy);

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});


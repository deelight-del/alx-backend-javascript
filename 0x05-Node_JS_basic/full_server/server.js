/**
 * Main server application.
 * This uses the routes defined in index.js
 */

const express = require('express');
const serverFunc = require('./routes/index');

const app = express();
const port = 1245;

serverFunc(app);

app.listen(port);

export default app;

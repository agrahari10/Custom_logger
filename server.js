const express = require('express');
const app = express()

const logger = require('./logger');

logger.info('This is an informational message');
logger.warn('This is a warning message');
logger.error('This is an error message');
app.listen(3000, (err) => {
    if (err) throw err;
    console.log("server ready on 3000");
});


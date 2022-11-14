const cors = require('cors');
const express = require('express');
const { usersRouter } = require('../routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);


module.exports = app;
require('dotenv').config()

const express = require('express');

const {connectDB} = require('./config/db')

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(cors());

require('./Association');

app.use('/workspace', routes);

connectDB();

module.exports = app;


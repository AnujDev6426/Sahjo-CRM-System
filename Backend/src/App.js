require('dotenv').config()

const express = require('express');

const {connectDB} = require('./config/db')

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/E-admin', routes);

connectDB();

module.exports = app;


const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const deadlineRoute = require('./routes/deadline');
const categoryRoute = require('./routes/category');
const statusProductRoute = require('./routes/statusProduct');
const clientRoute = require('./routes/client');
const statusRoute = require('./routes/status');
const productRoute = require('./routes/product');
const billRoute = require('./routes/bill');
const dashboardRoute = require('./routes/dashboard');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use('/user', userRoute);
app.use('/deadline', deadlineRoute);
app.use('/category', categoryRoute);
app.use('/client', clientRoute);
app.use('/status', statusRoute);
app.use('/product', productRoute);
app.use('/statusProduct', statusProductRoute);
app.use('/bill', billRoute);
app.use('/dashboard', dashboardRoute);

module.exports = app;
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.pue44.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
    res.send('Hi there');
});

app.listen(3002, () => {
    console.log('Listening on port 3002');
});
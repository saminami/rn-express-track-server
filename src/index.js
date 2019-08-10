const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri =
    'mongodb+srv://admin:?@cluster0-t2e7t.azure.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
})

mongoose.connection.on('connected', () => {
    console.log("connected to mongo instance")
})

mongoose.connection.on('error', (err) => {
    console.log("Error connecting to mogno", err);
})

app.get('/', (req, res) => {
    res.send('Hi There')
});

app.listen(3000, () => {
    console.log("listening on port 3000")
})


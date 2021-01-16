const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/adminRoutes');

const MONGODB_URI = 'mongodb+srv://freak2810:Sheena&mani01@boo-boo.lx0og.mongodb.net/boo-boo';

const app = express();
const port = 8000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(adminRoutes);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        // console.log(result);
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch(err => console.log(err));
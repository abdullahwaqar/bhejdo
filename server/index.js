const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//? Routes Config Setup
const index = require('./routes');
const uploadRoute = require('./routes/api/upload')

//? Middleware Setup
app.use(morgan('dev'));
app.use(cors({
    exposedHeaders: '*'
}));

app.use(bodyParser.json({
    limit: '50mb'
}));

//? DB config
const db = require('./config/key').mongoURI;
mongoose.connect(db, { useNewUrlParser: true }).then(
    () => {
        console.log('MongoDB Connected.');
    }
).catch(
    (err) => {
        console.log(err);
    }
);

//! Mounting Point for routes
app.use('/', index);
app.use('/upload', uploadRoute);

//* Starts the server on assigned port
const PORT = 3000 || process.env.PORT;
app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT}`);
});
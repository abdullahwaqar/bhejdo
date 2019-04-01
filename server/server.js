const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//* Initilizing the app
const app = express();

//* Importing MONGODB URI
const db_uri = require('./config/keys').mongoURI;

//* Requiring for all the routers
const indexRouter = require('./routes/index');
const uploadRouter = require('./routes/api');

//*? Setting up middleware here
app.use(volleyball);
//* Setting up CORS
app.use(cors({
    origin: 'http://localhost:8080'
}));
//* BodyParser to parse the incoming request body
app.use(bodyParser.json());

//* Connect to MONGO
mongoose.connect(db_uri, {useNewUrlParser: true, autoIndex: false}, () => {
    console.log('Connection Established with MLab');
});

//* Mapping the routers on url end points
//? Index route
app.use('/', indexRouter);
//? Upload route
app.use('/api/', uploadRouter);

//* Error handlers Middleware
const errorHandler = require('./middlewares/errors');
app.use(errorHandler);

//* Port Setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
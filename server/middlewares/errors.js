//* @desc: This file contains the implementation for all the http error and its handelers

const express = require('express');
const router = express.Router();
const createError = require('http-errors');

//* catch 404 and forward to error handler
router.use((req, res, next) => {
    res.status(404);
    const error = new Error('Not Found - ' + req.originalUrl);
    next(error);
});

//* error handler
router.use((err, req, res, next) => {
    //* set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};
    //* show the error page
    // return res.send(err.status || 500);
    res.status(res.statusCode || 500);
    res.contentType('application/json');
    return res.json({
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
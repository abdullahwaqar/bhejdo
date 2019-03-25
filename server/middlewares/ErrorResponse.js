/*
* This file contains the responses if server hits any error and responds back with appropriate status code
*/

const respondError = (res, next, errorCode, message) => {
    res.sendStatus(errorCode);
    const error = new Error(message);
    next(error);
    res.end();
}

module.exports = respondError;
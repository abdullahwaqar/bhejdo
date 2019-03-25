/*
? This file contains the upload route
*/

const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const path = require('path');

const ErrorResponse = require('../../middlewares/ErrorResponse');

//* Modified options for file upload
router.use(fileUpload());

/*
* @desc: Route for uploading a file
*        file objects exists in req.body
* @params: Defaults
*/
router.post('/upload', (req, res, next) => {
    if (Object.keys(req.files).length == 0) {
        ErrorResponse(res, next, 400, 'No files were uploaded.');
    }
    console.log(req.files.upload);
    //* The name of the input field is used to retrieve the uploaded file
    const uploadFile = req.files.upload;
    const uploadFilename = req.files.upload.name;
    const uploadPath = path.join(__dirname, '../../', 'storage/uploads', uploadFilename);
    //* Use the mv() method to place the file somewhere on your server
    console.log(uploadPath);
    uploadFile.mv(uploadPath, (err) => {
        if (err) {
            ErrorResponse(res, next, 500, 'Error Uploading.');
        } else {
            res.json({
                success: true
            });
        }
    });
});

module.exports = router;
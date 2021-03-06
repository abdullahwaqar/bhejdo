/*
? This file contains the upload route
*/

const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const path = require('path');

const ErrorResponse = require('../../middlewares/ErrorResponse');
const FileModel = require('../../models/File');

//* Modified options for file upload
router.use(fileUpload());

/*
* @desc: Route for uploading a file
*        file objects exists in req.body
* @params: Defaults
*/
router.post('/upload', (req, res, next) => {
    console.log(req.body.password);
    if (Object.keys(req.files).length == 0) {
        ErrorResponse(res, next, 400, 'No files were uploaded.');
    }
    //* The name of the input field is used to retrieve the uploaded file
    const uploadFile = req.files.upload;
    const uploadFilename = req.files.upload.name;
    const uploadPath = path.join(__dirname, '../../', 'storage/uploads', uploadFilename);
    //* Use the mv() method to place the file somewhere on your server
    uploadFile.mv(uploadPath, (err) => {
        if (err) {
            ErrorResponse(res, next, 500, 'Error Uploading.');
        } else {
            newFileUpload = new FileModel({
                original_file_name: uploadFilename,
                file_size: req.files.upload.size,
                file_md5: req.files.upload.md5,
                file_mime_type: req.files.upload.mimetype,
                password_protected: req.body.password
            });
            newFileUpload.save((err, result) => {
                if (err) {
                    ErrorResponse(res, next, 500, 'Error Uploading.');
                } else {
                    res.json({
                        success: true,
                        file: {
                            result
                        }
                    });
                }
            });
        }
    });
});

/*
* @desc: Route for downloading a file
* @params: Token for a file
*/
router.get('/download/:token', (req, res, next) => {
    const fileId = req.params.token;
    FileModel.findById(fileId, (err, result) => {
        if (err) {
            ErrorResponse(res, next, 500, 'Internal Server Error');
        } else {
            if (result) {
                const fileName = result.original_file_name;
                const filePath = path.join(__dirname, '../../', 'storage/uploads', fileName);
                console.log(result)
                res.download(filePath, fileName, (err) => {
                    if (err) {
                        ErrorResponse(res, next, 404, 'File Not Found.');
                    }
                });
            } else {
                ErrorResponse(res, next, 404, 'File Not Found.');
            }
        }
    });
});

module.exports = router;
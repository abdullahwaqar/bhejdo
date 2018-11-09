const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//? File Storage Config
const storageDir = path.join(__dirname, '../', '../', 'storage');
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, storageDir);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storageConfig });

router.get('/', (req, res) => {
    return res.status(200);
});

/*
* @params(filename || token)
* Request Method GET
? Route for Downloading file.
? The route accepts filename or token
*/
router.get('/download/:token', (req, res, next) => {
    const filename = req.params.token;
    const filePath = `${storageDir}/${filename}`;
    console.log(filePath);
    return res.download(filePath, filename, (err) => {
        if (err) {
            return res.status(404).json({
                error: {
                    message: "File Not Found."
                }
            });
        } else {
            console.log('Download Successful');
        }
    });
});

/*
* @params(files.array)
* Request Method POST
? Route for Uploading file.
? The route accepts array of files
*/
router.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    const files = req.files;
    return res.json({
        files: files,
    });
    // return res.status(200).json({
    //     message: "Upload Route Works"
    // });
});

module.exports = router;
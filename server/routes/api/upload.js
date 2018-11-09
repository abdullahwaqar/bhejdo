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

router.post('/', upload.array('files'), (req, res) => {
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
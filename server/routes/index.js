const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({
        verion: 0.1
    });
});

module.exports = router;
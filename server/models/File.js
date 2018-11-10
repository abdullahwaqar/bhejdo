const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    originalName: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    // filename: {
    //     type: String,
    //     required: true
    // },
    size: {
        type: String,
        required: true
    },
    created: {
        type: Date.now(),
        required: true
    }
});
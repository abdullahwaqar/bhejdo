const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    original_file_name: {
        type: String,
        required: true
    },
    file_size: {
        type: Number,
        required: true
    },
    file_md5: {
        type: String,
        required: true
    },
    file_mime_type: {
        type: String,
        required: true
    },
    uploaded_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = File = mongoose.model('bhejdo_file_uploads', FileSchema);
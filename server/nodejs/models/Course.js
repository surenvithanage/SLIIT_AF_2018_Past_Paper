const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Subject = require('./Subject');

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    passMark: {
        type: String,
        required: true
    },
    lectureInCharge: {
        type: String,
        required: true
    },
    subject: [{
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    }]
});

module.exports = mongoose.model('course',courseSchema);
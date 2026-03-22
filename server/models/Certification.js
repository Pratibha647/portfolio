const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: String },
    image: { type: String },
    description: { type: String },
    certificateLink: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Certification', certificationSchema);

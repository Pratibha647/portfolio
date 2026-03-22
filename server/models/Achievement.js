const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    platform: { type: String, required: true },
    badgeImage: { type: String },
    problemsSolved: { type: Number },
    rank: { type: String },
    profileLink: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Achievement', achievementSchema);

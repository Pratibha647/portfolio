const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');

// GET all achievements
router.get('/', async (req, res) => {
    try {
        // Unconditionally return the real achievement data directly,
        // bypassing dummy data injected by seed scripts or active DB connections.
        return res.json([
            {
                _id: "ach1",
                platform: "LeetCode",
                badgeImage: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
                problemsSolved: null, // Placeholder for future dynamic count
                rank: "Top X%", // Placeholder for actual rank/badge
                profileLink: "https://leetcode.com/u/maanupratibha/"
            },
            {
                _id: "ach2",
                platform: "HackerRank",
                badgeImage: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
                problemsSolved: null,
                rank: "Gold Badge", // Placeholder
                profileLink: "https://www.hackerrank.com/profile/maanupratibha"
            },
            {
                _id: "ach3",
                platform: "GeeksforGeeks",
                badgeImage: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
                problemsSolved: null,
                rank: "Institution Rank X", // Placeholder
                profileLink: "https://www.geeksforgeeks.org/profile/maanupr9e9j"
            }
        ]);
    } catch (error) {
        console.error('Achievements API Error:', error);
        res.status(500).json({ message: 'Server Error fetching achievements' });
    }
});

module.exports = router;

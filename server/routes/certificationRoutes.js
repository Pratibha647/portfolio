const express = require('express');
const router = express.Router();
const Certification = require('../models/Certification');

// GET all certifications
router.get('/', async (req, res) => {
    try {
        // Unconditionally return the real certification data directly,
        // bypassing dummy data injected by seed scripts or active DB connections.
        return res.json([
            {
                _id: "cert1",
                title: "Computational Theory: Language Principle & Finite Automata Theory",
                issuer: "Infosys",
                date: "Aug 2025",
                description: "Covers finite automata, formal languages, and computation theory.",
                image: "/certificates/infosys.png",
                certificateLink: "https://drive.google.com/file/d/1DC8Jd3i3NpxMJhW5wbChwT5r5S_trGEW/view"
            },
            {
                _id: "cert2",
                title: "Cloud Computing",
                issuer: "NPTEL",
                date: "Jun 2025",
                description: "Concepts of cloud architecture, virtualization, and distributed systems.",
                image: "/certificates/NPTEL.png",
                certificateLink: "https://drive.google.com/file/d/1DYm5dR3sEf6r5Fhia2CCuIXvZwVGThDW/view"
            },
            {
                _id: "cert3",
                title: "Responsive Web Designing",
                issuer: "freeCodeCamp",
                date: "Not specified",
                description: "Focus on building responsive layouts using HTML, CSS, and Flexbox.",
                image: "/certificates/freecodecamp.png",
                certificateLink: "https://www.freecodecamp.org/certification/fcccd18faac-61e5-4c1b-a4ca-cf6cd16df270/responsive-web-design"
            }
        ]);
    } catch (error) {
        console.error('Certifications API Error:', error);
        res.status(500).json({ message: 'Server Error fetching certifications' });
    }
});

module.exports = router;

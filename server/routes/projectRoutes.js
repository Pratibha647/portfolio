const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
    try {
        // Unconditionally return the real project data directly
        // bypassing any obsolete dummy data in the MongoDB.
        return res.json([
            {
                _id: "project1",
                title: "AI Resume Builder",
                description: "A full-stack MERN application that allows users to create, edit, and download professional resumes. Currently under development.",
                technologies: ["React", "Node.js", "Express", "MongoDB"],
                githubLink: "https://github.com/Pratibha647/resume-builder",
                liveLink: "",
                image: "/projects/resume-builder.png",
                badge: "🚧 In Progress"
            },
            {
                _id: "project2",
                title: "Foodeez – Recipe Sharing App",
                description: "A full-stack recipe sharing platform where users can explore, add, and manage recipes.",
                technologies: ["React", "Node.js", "Express", "MongoDB"],
                githubLink: "https://github.com/Pratibha647/foodeez",
                liveLink: "https://foodeez-psi.vercel.app/",
                image: "/projects/foodeez.png",
                badge: ""
            },
            {
                _id: "project3",
                title: "Course Selling App (Backend)",
                description: "Backend system for a course selling platform with authentication and APIs.",
                technologies: ["Node.js", "Express", "MongoDB"],
                githubLink: "https://github.com/Pratibha647/course-selling-app",
                liveLink: "https://foodeez-2.onrender.com",
                image: "/projects/course-app.png",
                badge: "Backend Only"
            }
        ]);
    } catch (error) {
        console.error('Projects API Error:', error);
        res.status(500).json({ message: 'Server Error fetching projects' });
    }
});

module.exports = router;

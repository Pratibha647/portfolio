const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import Model
const Project = require('./models/Project');

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error('MONGO_URI is undefined. Please add it to your .env file to update the database.');
      process.exit(1);
    }
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected for project update...');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const updateProjects = async () => {
  await connectDB();

  try {
    // Clear existing projects ONLY
    await Project.deleteMany();
    console.log('Existing projects cleared.');

    // New Data
    const projects = [
      {
        title: "AI Resume Builder",
        description: "A full-stack MERN application that allows users to create, edit, and download professional resumes. Currently under development with features like dynamic form inputs and PDF generation.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        githubLink: "https://github.com/Pratibha647/resume-builder",
        liveLink: "",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
        badge: "Ongoing"
      },
      {
        title: "Foodeez – Recipe Sharing App",
        description: "A full-stack recipe sharing platform where users can explore, add, and manage recipes. Includes authentication and dynamic content handling.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        githubLink: "https://github.com/Pratibha647/foodeez",
        liveLink: "https://foodeez-psi.vercel.app/",
        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80",
        badge: ""
      },
      {
        title: "Course Selling App (Backend)",
        description: "Backend system for a course selling platform with authentication, course management, and API endpoints. Frontend will be developed later.",
        technologies: ["Node.js", "Express", "MongoDB"],
        githubLink: "https://github.com/Pratibha647/course-selling-app",
        liveLink: "https://foodeez-2.onrender.com",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        badge: "Backend Only"
      }
    ];

    // Insert to MongoDB
    await Project.insertMany(projects);
    
    console.log('MongoDB successfully updated with new Projects!');
    process.exit(0);
  } catch (error) {
    console.error('Error with project update:', error);
    process.exit(1);
  }
};

updateProjects();

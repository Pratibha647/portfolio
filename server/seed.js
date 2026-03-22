const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import Models
const Project = require('./models/Project');
const Certification = require('./models/Certification');
const Achievement = require('./models/Achievement');

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error('MONGO_URI is undefined. Please add it to your .env file to seed the database.');
      process.exit(1);
    }
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected for seeding...');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const seedData = async () => {
  await connectDB();

  try {
    // Clear existing data
    await Project.deleteMany();
    await Certification.deleteMany();
    await Achievement.deleteMany();
    console.log('Existing DB data cleared.');

    // Seed Projects
    const projects = [
      {
        title: "E-Commerce Platform",
        description: "A full-featured MERN stack e-commerce application. Includes user authentication, product search, cart functionality, and Stripe payment integration. Admin dashboard for managing products and orders.",
        technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
        githubLink: "https://github.com",
        liveLink: "https://vercel.com",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Real-Time AI Chat",
        description: "A sophisticated chat application powered by WebSocket and OpenAI. Features real-time messaging, AI chatbot assistants, typing indicators, and user presence tracking with an elegant dark mode UI.",
        technologies: ["React", "Socket.io", "Tailwind CSS", "OpenAI API", "Node.js"],
        githubLink: "https://github.com",
        liveLink: "https://vercel.com",
        image: "https://images.unsplash.com/photo-1676299081847-824916de030a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Task Management Dashboard",
        description: "A Kanban-style productivity board inspired by Trello. Users can create workflows, drag-and-drop tasks, set deadlines, and collaborate in real-time. Features role-based access control.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
        githubLink: "https://github.com",
        liveLink: "https://vercel.com",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ];

    // Seed Certifications
    const certifications = [
      {
        title: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        certificateLink: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
      },
      {
        title: "Full Stack JavaScript Developer",
        issuer: "MongoDB University",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        certificateLink: "https://learn.mongodb.com/"
      },
      {
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Coursera",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        certificateLink: "https://www.coursera.org/"
      }
    ];

    // Seed Achievements
    const achievements = [
      {
        platform: "LeetCode",
        badgeImage: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
        problemsSolved: 450,
        profileLink: "https://leetcode.com/"
      },
      {
        platform: "HackerRank",
        badgeImage: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
        problemsSolved: 230,
        profileLink: "https://hackerrank.com/"
      },
      {
        platform: "GeeksforGeeks",
        badgeImage: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
        problemsSolved: 180,
        profileLink: "https://auth.geeksforgeeks.org/"
      },
      {
        platform: "CodeChef",
        badgeImage: "https://upload.wikimedia.org/wikipedia/en/7/7b/Codechef%28new%29_logo.svg",
        problemsSolved: 120,
        profileLink: "https://www.codechef.com/"
      }
    ];

    // Insert to MongoDB
    await Project.insertMany(projects);
    await Certification.insertMany(certifications);
    await Achievement.insertMany(achievements);
    
    console.log('MongoDB successfully seeded with Projects, Certifications, and Achievements!');
    process.exit(0);
  } catch (error) {
    console.error('Error with data import:', error);
    process.exit(1);
  }
};

seedData();

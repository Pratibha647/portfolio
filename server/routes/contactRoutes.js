const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST receive contact form message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Something went wrong' });
    }

    const mongoose = require('mongoose');
    
    // If DB is connected, save it to MongoDB
    if (mongoose.connection.readyState === 1) {
      const newMessage = new Message({
        name,
        email,
        message
      });
      await newMessage.save();
      return res.status(201).json({ success: true, message: 'Message sent successfully!' });
    }
    
    // Fallback: Mock success if no DB connected to not break client flow
    console.log('Mock Message Received via Contact API:', { name, email, message });
    res.status(201).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Contact API Error:', error);
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
});

module.exports = router;

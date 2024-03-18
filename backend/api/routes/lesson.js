// routes/lesson.js

const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');

// Route for accessing lesson content
router.get('/:lessonId', async (req, res) => {
  try {
    // Fetch lesson content from the database
    const lesson = await Lesson.findById(req.params.lessonId);
    if (!lesson) {
      return res.status(404).json({ msg: 'Lesson not found' });
    }

    res.json(lesson);
  } catch (error) {
    console.error('Error accessing lesson content:', error);
    res.status(500).json({ msg: 'Internal server error' });
  }
});

module.exports = router;

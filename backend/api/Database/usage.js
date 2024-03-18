// Example usage in a route handler

const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');
const {
  createLesson,
  getAllLessons,
  getLessonById,
  updateLesson,
  deleteLesson,
} = require('../db/lessonQueries');

// Create a new lesson
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const lesson = await createLesson(title, content);
    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all lessons
router.get('/', async (req, res) => {
  try {
    const lessons = await getAllLessons();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a lesson by ID
router.get('/:id', async (req, res) => {
  try {
    const lesson = await getLessonById(req.params.id);
    res.json(lesson);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update a lesson
router.put('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const lesson = await updateLesson(req.params.id, title, content);
    res.json(lesson);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a lesson
router.delete('/:id', async (req, res) => {
  try {
    const lesson = await deleteLesson(req.params.id);
    res.json(lesson);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;

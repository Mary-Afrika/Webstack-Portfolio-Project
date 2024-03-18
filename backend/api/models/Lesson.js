// models/Lesson.js (Example schema for lesson content)

const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;

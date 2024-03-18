// models/Quiz.js

const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctOptionIndex: {
    type: Number,
    required: true,
  },
  lessonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
    required: true,
  },
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;

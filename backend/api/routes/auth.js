// routes/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { check } = require('express-validator');
const User = require('../models/User');

// Route for user registration (signup)
router.post(
  '/signup',
  [
    check('email').isEmail().withMessage('Invalid email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  async (req, res) => {
    try {
      // Validate request body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Check if user with provided email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Create a new user
      user = new User({
        email: req.body.email,
        password: hashedPassword,
      });

      // Save the user to the database
      await user.save();

      res.status(201).json({ msg: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ msg: 'Internal server error' });
    }
  }
);

// Route for user login
router.post(
  '/login',
  [
    check('email').isEmail().withMessage('Invalid email'),
    check('password').exists().withMessage('Password is required'),
  ],
  async (req, res) => {
    try {
      // Validate request body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Check if user with provided email exists
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // Check if password is correct
      const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');

      res.json({ token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ msg: 'Internal server error' });
    }
  }
);

// Route for user logout (optional)
router.post('/logout', (req, res) => {
  // Logout logic (e.g., invalidate JWT token)
  res.json({ msg: 'User logged out' });
});

module.exports = router;

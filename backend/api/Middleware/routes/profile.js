// routes/profile.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Protected route requiring authentication
router.get('/', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;

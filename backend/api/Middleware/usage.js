const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Route requiring authentication
router.get('/profile', auth, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;

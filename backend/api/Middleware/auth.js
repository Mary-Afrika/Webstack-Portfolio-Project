// middleware/auth.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    // Get token from request headers
    const token = req.header('Authorization').replace('Bearer ', '');

    // Verify token
    const decoded = jwt.verify(token, 'your_jwt_secret');

    // Find user by ID
    const user = await User.findOne({ _id: decoded.userId });

    // Check if user exists
    if (!user) {
      throw new Error();
    }

    // Add user object and token to request object
    req.user = user;
    req.token = token;
    
    next(); // Move to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ msg: 'Please authenticate' });
  }
};

module.exports = auth;

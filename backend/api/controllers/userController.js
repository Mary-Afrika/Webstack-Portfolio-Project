// controllers/userController.js

const User = require('../models/User');

const getUserProgress = async (req, res) => {
  try {
    // Fetch user progress from the database
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json(user.progress);
  } catch (error) {
    console.error('Error fetching user progress:', error);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

const updateUserProgress = async (req, res) => {
  try {
    // Fetch user from the database
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Update user progress
    user.progress = req.body.progress;

    // Save updated user to the database
    await user.save();

    res.json({ msg: 'User progress updated successfully' });
  } catch (error) {
    console.error('Error updating user progress:', error);
    res.status(500).json({ msg: 'Internal server error' });
  }
};

module.exports = {
  getUserProgress,
  updateUserProgress,
};

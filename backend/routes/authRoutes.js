const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/UserModel');
const fs = require('fs');

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  try {
    try {
      fs.appendFileSync('./signup-debug.log', JSON.stringify(req.body) + '\n');
    } catch (e) {
      console.log('Debug write failed', e);
    }
    console.log('Incoming signup body:', req.body);
    let { name, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // default name if frontend doesn't provide one
    if (!name) name = email.split('@')[0];

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already in use' });

    const hashed = await bcrypt.hash(password, 10);

    console.log('Signup payload:', { name, email });

    const user = new User({ name, email, password: hashed });
    await user.save();

    res.status(201).json({ message: 'Account created successfully' });
  } catch (err) {
    console.log('AuthRoutes Signup Error:', err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

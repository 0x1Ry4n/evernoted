const express = require('express');
const router = express.Router();
const User = require('../models/user');
const withAuth = require('../middlewares/auth');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.JWT_TOKEN;
const expires = process.env.JWT_EXPIRES;

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });

  try {
    let newUser = await user.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Error registering new user!' });
    console.log(err);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user)
      res.status(401).json({ error: 'Incorrect email or password!' });

    else {
      user.comparePassword(password, function (err, same) {
        if (!same)
          res.status(401).json({ error: 'Incorrect email or password! ' });
        else {
          const token = jwt.sign({ email }, secret, { expiresIn: expires });
          res.json({ user: user, token: token });
        }
      });
    }

  } catch (err) {
    res.status(500).json({ error: 'Internal error, please try again!' });
  }
});

router.put('/:id', withAuth, async (req, res) => {
  const { name, email } = req.body;

  try {
    let updatedUser = User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: { name: name, email: email } },
      { upsert: true, 'new': true }
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Error updating user info!' });
  }
});

router.put('/password', withAuth, async (req, res) => {
  const { password } = req.body;

  try {
    let user = await User.findOne({ _id: req.user._id });
    user.password = password;
    user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error updating user password!' });
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    let user = User.findOne({ _id: req.user._id });
    await user.delete();

    res.status(204).json({ message: 'User deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting user!' });
  }
});

module.exports = router;

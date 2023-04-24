// Importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Creating an express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Define a mongoose schema for a simple User model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
});

// Create a mongoose model for the User schema
const User = mongoose.model('User', userSchema);

// Define an API endpoint for getting all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get users' });
  }
});

// Define an API endpoint for adding a new user
app.post('/users', async (req, res) => {
  const { name, age, email } = req.body;
  const user = new User({ name, age, email });
  try {
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add user' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { getTopHeadlines } = require('./newsService');
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
import 'bootstrap/dist/css/bootstrap.min.css';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Example route to fetch top headlines
app.get('/api/news', async (req, res) => {
  try {
    const articles = await getTopHeadlines();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Connect to MongoDB and other setup
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

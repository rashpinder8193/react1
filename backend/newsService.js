// newsService.js
const axios = require('axios');

// Load environment variables
require('dotenv').config();

const apiKey = process.env.NEWS_API_KEY;
const baseUrl = 'https://newsapi.org/v2';

const getTopHeadlines = async (country = 'us') => {
  try {
    const response = await axios.get(`${baseUrl}/top-headlines`, {
      params: {
        country,
        apiKey,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
};

module.exports = { getTopHeadlines };

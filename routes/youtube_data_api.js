const axios = require('axios');
const keys = require('./config/keys');

module.exports = app => {
  app.get('/api/data', async (req, res) => {
    const request = await axios.get(`${keys.youtubeApiURL}${req.query.keyword}&key=${keys.youtubeApiKey}`);
    console.log(request);
  });
};

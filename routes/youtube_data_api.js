const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/video', (req, res) => {
    res.send('hi');
    // const request = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&videoSyndicated=true&q=${req.query.keyword}&key=${req.query.key}`);
    // console.log(request);
  });

  app.get('/api/test', (req, res) => {
    res.send('test');
  });
};

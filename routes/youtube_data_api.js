const axios = require('axios');

module.exports = app => {
  // app.get('/api/data', async (req, res) => {
  //   const request = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&videoSyndicated=true&q=${keyword}&key=${apiKey}`)
  // });
  app.get('/api/test', (req, res) => {
    res.send('test');
  });
};

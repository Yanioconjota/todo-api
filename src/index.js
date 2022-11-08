const express = require('express');

const api = express();

api.use(express.static(__dirname + '/public'));

api.listen(3000, () => {
  console.log('Api up and running!');
});

// api.get('/', (req, res) => {
//   console.log(req);
//   res.send('Hello world!');
// });

api.post((req, res) => {
  console.log(req.body);
  res.send('Post request received');
});

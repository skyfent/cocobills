const express = require('express');
const app = express();
 console.log('Connection was successful.');
app.get('/', (req, res) => {
  res.send('Hello, world! Working Well');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

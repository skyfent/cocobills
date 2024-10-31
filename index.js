const express = require('express');
const app = express();
const port = 6799;
 console.log('Connection was successful.');
app.get('/', (req, res) => {
  res.send({
  "message": "<h1>Welcome to Coco Developer Console!</h1>"
});
 
});

app.listen(port, () => {
  console.log(`Server listening on port ` + port);
});

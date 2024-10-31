const express = require('express');
const app = express();
const port = 6799;
 console.log('Connection was successful.');
app.get('/', (req, res) => {
 // res.send('Hello, world! Working Well');
 {
  "message": "Hello, world! Working Well"
}
});

app.listen(port, () => {
  console.log(`Server listening on port ` + port);
});

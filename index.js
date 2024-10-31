const express = require('express');
const app = express();
const port = 6799;
// console.log('Connection was successful.');

//Welcome endpoint
app.get('/', (req, res) => {
        res.send({
        "message": "<h1>Welcome to Coco Developer Console!</h1>"
      }); 
});



//Lookup customer
app.get('/lookup-phone', (req, res) => {
        res.send({
        "message": "<h1>Welcome to Coco Developer Console!</h1>"
      }); 
});


//Register Customer endpoint
app.get('/register', (req, res) => {
        res.send({
        "message": "<h1>Registration was successful!</h1>"
      }); 
});


//Login Customer endpoint
app.get('/sign-in', (req, res) => {
        res.send({
        "message": "<h1>Login Successful!</h1>"
      }); 
});







app.listen(port, () => {
  console.log(`Server listening on port ` + port);
});

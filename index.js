const express = require('express');
const app = express();
const port = 6799;
// console.log('Connection was successful.');

//Welcome endpoint
app.get('/', (req, res) => {
        res.send({
        "message": "Welcome to Coco Developer Console!"
      }); 
});



//Lookup customer
app.get('/lookup-phone', (req, res) => {
        res.send({
        "message": "Customer Phone Number not found!"
      }); 
});


//Register Customer endpoint
app.get('/register', (req, res) => {
        res.send({
        "message": "Registration was successful!"
      }); 
});


//Login Customer endpoint
app.get('/sign-in', (req, res) => {
        res.send({
        "message": "Login Successful!"
      }); 
});







app.listen(port, () => {
  console.log(`Server listening on port ` + port);
});

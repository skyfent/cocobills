const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');  
const pool = require('./database');
 
// Middleware to parse request bodies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const HostName = "http://localhost:3000"
const port = 9000;

// Enable CORS for requests from http://localhost:6799
const cors = require('cors');
app.use(cors({
  origin: HostName
}));


   


//listdiscos, listInternet, listWater, listWaste, listSchool, listCableTv 
app.get('/electricity/listdiscos', (req, res) => {  
    pool.query('SELECT * FROM productlist WHERE category = "Electricity" && status = 1', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
        } else {
        //  res.json(results);          
        //  const ids = results.map(item => item.id); 
          const listItems = results.map((disco) => ({
                  operator: disco.operator,
                  billercode: disco.billercode
                }));

        // const listItems = results.map(({ operator, billercode }) => ({ operator, billercode }));

          res.json(listItems);          
        console.log(listItems);
                }
    }); 
});

 



app.post('/electricity/validate', (req, res) => { 
    /*
    Actions to carry out includes
    1.  Check if user exist using phoneno in users_table
    2. if user doesn't exist, redirect to sign up
    3.  if user exist, fetch data 
    4. use the data to initiate curl lookup for meter details from buypower lookup endpoint
    5.   store data in coco_validation (insert submitted data)
    6.  also store data in coco_electricity_orders using transac id ( insert data from curl uisng phoneno)
    */ 
const data = { selectedAccountType, disco, meterno, amount, phoneno } = req.body;
         
 console.log(data); 
 // Check if user exists in users_table
  pool.query('SELECT * FROM users WHERE customer_phoneno = ?', [phoneno], (error, results) => {
    if (error) {
      console.error('Error checking user:', error);
      res.status(500).send('Error checking user');
      return;
    }

    if (results.length === 0) {
      // User doesn't exist, redirect to sign up 
      res.json({'user':0});   
    } else {
      // User exists, fetch data and continue processing
      const userData = results[0];
      //res.status(200).send('User successful'+userData); 
    //  res.json(userData);          
       console.log(userData); 
// var axios = require("axios").default;
// var options = {
//   method: 'GET',
//   url: 'https://api.buypower.ng/v2/check/meter',
//   params: {
//     meter: data.meterno,
//     disco: data.disco,
//     vendType: data.selectedAccountType 
//   },
//   headers: {
//     Accept: '*/*',
//     'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
//     Authorization: 'Bearer 6e71bcd2b2696b713dd706230dad254d9c005dc6560550b47bfdf1127a0597bc'
//   }
// };

// axios.request(options).then(function (response) {     
//   console.log(response.data);
//   const apiData = response.data;
// const combinedData = [{'CustomerData':userData, 'MeterData': apiData}];
//   res.json(combinedData); 
// }).catch(function (error) {
//   console.error(error);
// });
       
const crypto = require('crypto');

function generateTransactionId() {
  const bytes = crypto.randomBytes(4); // 4 bytes for 32 bits (8 digits)
  const randomPart = bytes.toString('hex');
  const timestampPart = Date.now().toString().slice(-2); // Get the last 2 digits of the timestamp
  return randomPart + timestampPart;
}
  
  //console.log(generateTransactionId());
        const transid = generateTransactionId();
        const product = 'Electricity';
        const uid = meterno;
      // Store data in coco_validation
       pool.query('INSERT INTO coco_validation SET ?', { transid, product, uid, selectedAccountType, disco, amount, phoneno }
      //  (selectedAccountType, disco,  amount, phoneno), 
      //  VALUES (selectedAccountType, disco,  amount, phoneno) 
        //SET ?', { selectedAccountType, disco, meterno, amount, phoneno }
        , (err, result) => {
        if (err) {
          console.error('Error inserting validation data:', err);
          res.status(500).send('Error inserting validation data');
          return;
        }
        res.json(transid); 
       //  console.log('Validation data inserted successfully:', result);
   
     });
 
    //     // Store data in coco_electricity_orders
    //     pool.query('INSERT INTO coco_electricity_orders SET ?', { transacId: curlResponse.data.transacId, ...otherElectricityOrderData }, (err, result) => {
    //       if (err) {
    //         console.error('Error inserting electricity order data:', err);
    //         res.status(500).send('Error inserting electricity order data');
    //       } else {
    //         console.log('Electricity order data inserted successfully:', result);
    //         res.status(200).send('Validation successful');
    //       }
    //     });
    //   });

    } //end of user exist block
  });
 

  });
  
 




app.get('/internet/listinternet', (req, res) => { 
    pool.query('SELECT * FROM productlist WHERE category = "Electricity" && status = 1', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
        } else {
        //  res.json(results);          
        //  const ids = results.map(item => item.id); 
          const listItems = results.map(({ operator, billercode }) => ({ operator, billercode }));
          res.json(listItems);          
        console.log(listItems);
                }
    }); 
});


app.get('/water/listwater', (req, res) => { 
    pool.query('SELECT * FROM productlist WHERE category = "Electricity" && status = 1', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
        } else {
        //  res.json(results);          
        //  const ids = results.map(item => item.id); 
          const listItems = results.map(({ operator, billercode }) => ({ operator, billercode }));
          res.json(listItems);          
        console.log(listItems);
                }
    }); 
});


app.get('/waste/listwaste', (req, res) => { 
    pool.query('SELECT * FROM productlist WHERE category = "Electricity" && status = 1', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
        } else {
        //  res.json(results);          
        //  const ids = results.map(item => item.id); 
          const listItems = results.map(({ operator, billercode }) => ({ operator, billercode }));
          res.json(listItems);          
        console.log(listItems);
                }
    }); 
});


app.get('/schools/listschools', (req, res) => { 
    pool.query('SELECT * FROM productlist WHERE category = "Schools" && status = 1', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
        } else {
        //  res.json(results);          
        //  const ids = results.map(item => item.id); 
          const listItems = results.map(({ operator, billercode }) => ({ operator, billercode }));
          res.json(listItems);          
        console.log(listItems);
                }
    }); 
});


app.get('/cabletv/listcabletv', (req, res) => { 
    pool.query('SELECT * FROM productlist WHERE category = "CableTv" && status = 1', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
        } else {
        //  res.json(results);          
        //  const ids = results.map(item => item.id); 
          const listItems = results.map(({ operator, billercode }) => ({ operator, billercode }));
          res.json(listItems);          
        console.log(listItems);
                }
    }); 
});














// generate token for another API to use in req.header
app.post('/login', (req, res) => {
    const user = {
        id: 1,
        username: 'abhishek',
        email: "abhishek@gmail.com"
    }
    let token = jwt.sign({ user: user }, 'shhhhh');
    res.send(token);
})

// verifyToken is a function that is used for check in API that token exist or not
// it can be put in between n number of API to check that authoriZed user loggedin or not.
app.get('/api', verifyToken, (req, res) => {
    try {
        jwt.verify(req.token, 'shhhhh', (error, authData) => {
            if (error) {
                res.send("not logged in")
            }
            res.json({
                message: "post Created",
                authData
            })
        })
    } catch (error) {
        res.send(error)
    }
})

// This funtion is middleware. 
function verifyToken(req, res, next) {
    try {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearerToken = bearerHeader.split(' ')[1];
            req.token = bearerToken;
            next();
        }
        else {
            res.send("Not logged-in")
        }
    }
    catch {
        res.send("something went wrong")
    }
}



// Start the server
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

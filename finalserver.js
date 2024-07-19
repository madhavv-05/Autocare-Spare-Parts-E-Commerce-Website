const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path=require('path');
const app = express();
const http = require('http');
const fetchCartData = require('./fetchCartData');


// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Yas@2004',
    database: 'autocare',
    debug: true
});
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'timing.html')));
app.use(express.static(path.join(__dirname, 'compressor.html')));
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/order1', (req, res) => {
    const { quantity } = req.body;
    const insertQuery = 'INSERT INTO cart (imgsource, Itemname, Itemno, Quantity, Price) VALUES (?, "Timing Belt", 1001, ?, ?)';
    connection.query(insertQuery, ["a", quantity, (quantity*350)], err => {
        if (err) {
            console.error('Error adding record:', err);
            res.status(500).send('Error adding record');
            return;
        }
        console.log('Record added successfully:');
        res.redirect('http://localhost:3000/cartData');
    });
});

app.post('/order2', (req, res) => {
    const { quantity } = req.body;
    const insertQuery = 'INSERT INTO cart (imgsource, Itemname, Itemno, Quantity, Price) VALUES (?, "Timing Belt", 1002, ?, ?)';
    connection.query(insertQuery, ["b", quantity, (quantity*450)], err => {
        if (err) {
            console.error('Error adding record:', err);
            res.status(500).send('Error adding record');
            return;
        }
        console.log('Record added successfully:');
        res.redirect('http://localhost:3000/cartData');
    });
});

app.post('/order3', (req, res) => {
    const { quantity } = req.body;
    const insertQuery = 'INSERT INTO cart (imgsource, Itemname, Itemno, Quantity, Price) VALUES (?, "Timing Belt", 1003, ?, ?)';
    connection.query(insertQuery, ["c", quantity, (quantity*126)], err => {
        if (err) {
            console.error('Error adding record:', err);
            res.status(500).send('Error adding record');
            return;
        }
        console.log('Record added successfully:');
        res.redirect('http://localhost:3000/cartData');
    });
});

app.post('/order4', (req, res) => {
    const { quantity } = req.body;
    const insertQuery = 'INSERT INTO cart (imgsource, Itemname, Itemno, Quantity, Price) VALUES (?, "AC Compressor", 2001, ?, ?)';
    connection.query(insertQuery, ["d", quantity, (quantity*750)], err => {
        if (err) {
            console.error('Error adding record:', err);
            res.status(500).send('Error adding record');
            return;
        }
        console.log('Record added successfully:');
        res.redirect('http://localhost:3000/cartData');
    });
});

app.post('/order5', (req, res) => {
    const { quantity } = req.body;
    const insertQuery = 'INSERT INTO cart (imgsource, Itemname, Itemno, Quantity, Price) VALUES (?, "AC Compressor", 2002, ?, ?)';
    connection.query(insertQuery, ["e", quantity, (quantity*855)], err => {
        if (err) {
            console.error('Error adding record:', err);
            res.status(500).send('Error adding record');
            return;
        }
        console.log('Record added successfully:');
        res.redirect('http://localhost:3000/cartData');
    });
});

app.post('/order6', (req, res) => {
    const { quantity } = req.body;
    const insertQuery = 'INSERT INTO cart (imgsource, Itemname, Itemno, Quantity, Price) VALUES (?, "AC Compressor", 2003, ?, ?)';
    connection.query(insertQuery, ["f", quantity, (quantity*985)], err => {
        if (err) {
            console.error('Error adding record:', err);
            res.status(500).send('Error adding record');
            return;
        }
        console.log('Record added successfully:');
        res.redirect('http://localhost:3000/cartData');
    });
});

app.post('/order7', (req, res) => {
  const { quantity } = req.body;
  const insertQuery = 'INSERT INTO cart (imgsource, Itemname, Itemno, Quantity, Price) VALUES (?, "Alternate Pulley", 3001, ?, ?)';
  connection.query(insertQuery, ["g", quantity, (quantity*750)], err => {
      if (err) {
          console.error('Error adding record:', err);
          res.status(500).send('Error adding record');
          return;
      }
      console.log('Record added successfully:');
      res.redirect('http://localhost:3000/cartData');
  });
});

app.post('/order8', (req, res) => {
  const { quantity } = req.body;
  const insertQuery = 'INSERT INTO cart (imgsource, Itemname, Itemno, Quantity, Price) VALUES (?, "Alternate Pulley", 3002, ?, ?)';
  connection.query(insertQuery, ["h", quantity, (quantity*999)], err => {
      if (err) {
          console.error('Error adding record:', err);
          res.status(500).send('Error adding record');
          return;
      }
      console.log('Record added successfully:');
      res.redirect('http://localhost:3000/cartData');
  });
});

app.post('/order9', (req, res) => {
  const { quantity } = req.body;
  const insertQuery = 'INSERT INTO cart (imgsource, Itemname, Itemno, Quantity, Price) VALUES (?, "Alternate Pulley", 3003, ?, ?)';
  connection.query(insertQuery, ["i", quantity, (quantity*855)], err => {
      if (err) {
          console.error('Error adding record:', err);
          res.status(500).send('Error adding record');
          return;
      }
      console.log('Record added successfully:');
      res.redirect('http://localhost:3000/cartData');
  });
});

app.post('/order10', (req, res) => {
  const { quantity } = req.body;
  const insertQuery = 'INSERT INTO cart (imgsource, Itemname, Itemno, Quantity, Price) VALUES (?, "Alternator Bearing", 4001, ?, ?)';
  connection.query(insertQuery, ["j", quantity, (quantity*300)], err => {
      if (err) {
          console.error('Error adding record:', err);
          res.status(500).send('Error adding record');
          return;
      }
      console.log('Record added successfully:');
      res.redirect('http://localhost:3000/cartData');
  });
});

app.post('/order11', (req, res) => {
  const { quantity } = req.body;
  const insertQuery = 'INSERT INTO cart (imgsource, Itemname, Itemno, Quantity, Price) VALUES (?, "Alternator Bearing", 4002, ?, ?)';
  connection.query(insertQuery, ["k", quantity, (quantity*120)], err => {
      if (err) {
          console.error('Error adding record:', err);
          res.status(500).send('Error adding record');
          return;
      }
      console.log('Record added successfully:');
      res.redirect('http://localhost:3000/cartData');
  });
});

app.post('/order12', (req, res) => {
  const { quantity } = req.body;
  const insertQuery = 'INSERT INTO cart (imgsource, Itemname, Itemno, Quantity, Price) VALUES (?, "Alternator Bearing", 4003, ?, ?)';
  connection.query(insertQuery, ["l", quantity, (quantity*250)], err => {
      if (err) {
          console.error('Error adding record:', err);
          res.status(500).send('Error adding record');
          return;
      }
      console.log('Record added successfully:');
      res.redirect('http://localhost:3000/cartData');
  });
});

app.get('/timingbelt.html', (req, res) => {
    res.sendFile(path.join(__dirname , 'timingbelt.html'));
});

app.get('/timingbelt2.html', (req, res) => {
    res.sendFile(path.join(__dirname , 'timingbelt2.html'));
});

app.get('/timingbelt3.html', (req, res) => {
    res.sendFile(path.join(__dirname , 'timingbelt3.html'));
});

app.get('/compressor.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'compressor.html'));
  });

app.get('/compressor2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'compressor2.html'));
  });

app.get('/compressor3.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'compressor3.html'));
  });

app.get('/alternatepulley.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'alternatepulley.html'));
});  

app.get('/alternatepulley2.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'alternatepulley2.html'));
});  

app.get('/alternatepulley3.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'alternatepulley3.html'));
});  

app.get('/bearings.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'bearings.html'));
});  

app.get('/bearings2.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'bearings2.html'));
}); 

app.get('/bearings3.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'bearings3.html'));
}); 

app.get('/exterior.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'exterior.html'));
}); 

app.get('/exterior2.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'exterior2.html'));
}); 

app.get('/exterior3.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'exterior3.html'));
}); 

app.get('/redirect', (req, res) => {
    res.redirect('http://localhost:3000/cartData');
});

app.get('/cartData', (req, res) => {
    fetchCartData((err, rows) => {
        if (err) {
            res.status(500).send('Error fetching data from database');
            return;
        }

        let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cart</title>
        <style>
            .struct
        {
            margin:auto;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            width: 1300;
           
        }
        .dis
        {
            background-color: #00246B;
            border:2px solid #00246B;
        }
        .nav table
        {
            margin:auto;
            border-radius: 25px;
            background-color: #CADCFC;
            font-size:20px;
        }
        .nav tr td:nth-child(6)
        {
          padding-right: 50px;
        }
        .nav tr td:nth-child(7)
        {
          padding-right: 20px;
        }
        .nav tr td:nth-child(8)
        {
          padding-right: 35px;
        }
        .nav tr td:last-child
        {
          padding-right: 35px;
        }
        .mySlides
        {
          display: none;
          transition: width 1s, height 1s, background-color 1s;
          aspect-ratio: 3/2;
          object-fit: contain;
          
        }
        .coffer,.scat
        {
          margin:0 162.5px;
        }
        
        .disp
        {
          margin: auto;
          width:75%;
          background-color: #8AB6F9;
          height:40%;
        }
        .fade {
          animation-name:fade;
          animation-duration: 2.5s;
        }
        @keyframes fade {
          from {opacity: .4}
          to {opacity: 1}
        }
        input[type="search"]
        {
          border-style: none;
            margin: 0 auto;
            display: block;
            height:30px;
            width:200px;
            float: left;
            border-style: none;
            border-radius: 25px;
        }
        input[type="search"]::placeholder
        {
          color:grey;
        
        }
        img[value="search"]
        { 
          width:20px;
          
        }
        button[value="sear"]
        {
            margin: 0 ;
            height:30px;
            padding: 0px;
            width:30px;
            border-style: none;
            border-radius: 25px;
            background-color: white;
        }
        button[value="cart"]
        {
          margin: 0 ;
          height:30px;
          padding: 0px;
          width:30px;
          border-style: none;
          background-color:transparent;
        }
        button[value="sear"]:hover
        {
          cursor: pointer;
        }
        
        .search
        {
          background-color: white;
          border-radius: 25px;
        }
        .logo
        {
            font-family: fantasy;
        }
        .nav td a {
          display: block;
          color: #00246B;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          border-radius: 25px;
          transition: background-color 1s;
        }
        
        .nav td a:hover {
          background-color:#8AB6F9 ;
          border-radius: 25px;
          box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }
        .sidenav1 {
          height: 100%;
          width: 0;
          position: fixed;
          z-index: 1;
          top: 0;
          right:0;
          background-color: #111;
          overflow-x: hidden;
          transition: 0.5s;
          padding-top: 60px;
        }
        
        .sidenav1 a {
          padding: 8px 8px 8px 32px;
          text-decoration: none;
          font-size: 25px;
          color: #818181;
          display: block;
          transition: 0.3s;
        }
        
        .sidenav1 a:hover {
          color: #f1f1f1;
        }
        
        .sidenav1 .closebtn {
          position: absolute;
          top: 0;
          right: 25px;
          font-size: 36px;
          margin-left: 50px;
        }
        
        
        body {
            font-family: "Lato", sans-serif;
            align-items: center;
            text-align: center;
          }
          
          
          .items td{
            background-color:white;
            transition: 0.3s;
            text-align: center;
            border-radius: 10px;
            box-shadow:  #6e6e6e 0px 0px 7px ;
            text-decoration: none;
          }
          td:not(.text):hover{
            box-shadow:  #222222 0px 0px 10px ;
           
            color:rgb(73, 95, 95);
          }
          .items a{
            text-decoration: none;
          }
          .items{
              float:left;
              margin-top:80px;
              margin-left: 20px;
            border-spacing: 300px;
            width: 900px;
          
          }
          
          
          .sidenav {
            height: 100%;
            width: 230px;
            margin-top: 170px;
            z-index: 1;
            top: 250px;
            left: 0;
            background-color:#cadcfc;
            overflow-x: hidden;
            padding-top: 20px;
            margin-left: 50px;
            border-radius: 25px;
            
            float:left;
          }
          
          /* Style the sidenav links and the dropdown button */
          .sidenav a, .dropdown1 {
            padding: 10px 18px 16px 16px;
            text-decoration: none;
            font-size: 20px;
            color: #818181;
            display: block;
            border: none;
            background: none;
            width: 100%;
            text-align: left;
            cursor: pointer;
            outline: none;
          }
          
          .sidenav a, .dropdown2 {
            padding: 6px 8px 6px 16px;
            text-decoration: none;
            font-size: 15px;
            color: #818181;
            display: block;
            border: none;
            background: none;
            width: 100%;
            text-align: left;
            cursor: pointer;
            outline: none;
          }
          
          .sidenav a, .dropdown-container a{
            padding: 6px 8px 6px 16px; 
            text-decoration: none;
            font-size: 15px;
            color: #818181;
            display: block;
            border: none;
            background: none;
            width: 100%;
            text-align: left;
            cursor: pointer;
            outline: none;
          }
          
          .sidenav a:hover, .dropdown1:hover {
            color: black;
          }
          
          .dropdown-container {
            display: none;
            background-color: #fffbfb;
            padding-left: 8px;
          }
         
          .items th{
            text-align: left;
            font-size: x-large;
          }
          .items h1{
            margin-left: 20px;
            font-family: "Audiowide", sans-serif; 
          }
          body{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          }
          
          .items td:not(.info){
            padding: 15px;
            width: 193.75px;
            height: 183.5px;
            
        }
        .items .info{
            padding: 25px;
            text-align: justify;
        }
        
        .items .name{
          margin-left: 15px;
          text-align: left;
          font-size:large;
          color: #111;
        }
        
        
        .price{
          margin-left: 15px;
          text-align: left;
          font-size:small;
          color: #111;
        }
        .add{
          border-radius: 7px;
          margin-top: 8px;
          width: 170px;
          height: 30px;
          font-size: small;
          color: #00246B;
          border-color: black;
          
        }
        .add p{
          margin-top: 6px;
          margin-bottom: 8px;
        }
        .add img{
        
        
          float: left;
        }
        .light{
          color: #8AB6F9;
          
          }
          .dark{
            color: #00246b;}
        
        
        
        
            .navA table
            {
            margin:auto;
            width: 83%;
            border-radius: 5px;
            background-color: #CADCFC;
            font-size:20px;
            }
            .navA tr td:nth-child(6)
            {
            padding-right: 50px;
            }
            .navA tr td:nth-child(7)
            {
            padding-right: 20px;
            }
            .navA tr td:nth-child(8)
            {
            padding-right: 35px;
            }
            .navA tr td:last-child
            {
            padding-right: 35px;
            }
            .navA td a {
            display: block;
            color: #00246B;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            border-radius: 25px;
            transition:  0.3s;
            }
            
            .navA td:hover {
            border-radius: 5px;
            box-shadow: 0 0px 16px 0 #8AB6F9 ;
            
            }
            .navA td{
              transition:0.3s ;
            }
            
            .searchA
            {
            background-color: white;
            border-radius: 25px;
            }
            
            input[type="searchA"]
            {
            border-style: none;
            margin: 0 auto;
            display: block;
            height:30px;
            width:200px;
            float: left;
            border-style: none;
            border-radius: 25px;
            }
            input[type="searchA"]::placeholder
            {
            color:grey;
            
            }
            .navA img
            {
            width:20px;
            
            }
            button[value="searA"]
            {
            margin: 0 ;
            height:30px;
            padding: 0px;
            width:30px;
            border-style: none;
            border-radius: 25px;
            background-color: white;
            }
            button[value="cart"]
            {
            margin: 0 ;
            height:30px;
            padding: 0px;
            width:30px;
            border-style: none;
            background-color:transparent;
            }
            button[value="searA"]:hover
            {
            cursor: pointer;
            }
            
            .searchA
            {
            background-color: white;
            border-radius: 25px;
            }
            
          
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
          }
          
          .container {
            max-width: 800px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
        
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
        
          th {
            background-color: #8AB6F9;
            color: #fff;
          }
        
          .total {
            text-align: right;
            margin-top: 20px;
          }
        
          .checkout-btn {
            background-color: #2196f3;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-transform: uppercase;
          }
        
          .checkout-btn:hover {
            background-color: #0d8aed;
          }
        
          .product-img {
            max-width: 50px;
            max-height: 50px;
            margin-right: 10px;
          }
        </style>
        </head>
        <body>
            <div class="navA">
                <table>
                    <tr>
                        <td><a vlaue="a" href="home.html" class="logo">Autocare</a></td>
                        <td><a class="active" href="home.html">Home</a></td>
                        <td><a href="#news">News</a></td>
                        <td><a href="contactus.html">Contact</a></td>
                        <td><a href="aboutus.html">About</a></td>
                        <td>
                            <div class="searchA">
                                <input type="search" placeholder="search here..."><button type="button" value="searA"><img src="search.jpg"></button>
                            </div>
                        </td>
                        <td>
                            <a href="signin.html" id="sinin">Sign in</a>
                        </td>
                        <td>
                            <a href="address.html"><button type="button" value="cart"><img src="cart.jpg"></button></a>
                        </td>
                      
                    </tr>
                </table>
            </div>
        
          <div class="container">
            <h2>Shopping Cart</h2>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Product Number</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
        `;

        rows.forEach(row => {
            html += `
                <tr>
                    <td>${row.imgsource}</td>
                    <td>${row.Itemname}</td>
                    <td>${row.Itemno}</td>
                    <td>${row.Quantity}</td>
                    <td>${row.Price}</td>
                </tr>
            `;
        });

        html += `
                </table>
            </body>
            </html>
        `;

        res.send(html);
    });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

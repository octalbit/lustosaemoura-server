require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const Post = require('./api/models/postModel'); //created model loading here
const bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.DB_URL}`); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });

const routes = require('./api/routes/postRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log(`server listening on ${port}`);
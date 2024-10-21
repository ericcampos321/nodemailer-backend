require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
 

const app = express();

const port = process.env.PORT || 5000;

//Config JSON dates
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Config CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));  

//Routes
app.use('/email', require('./routes/FormEmailRoutes'));



app.listen(port, () => console.log(
  `Server started on port ${port}`));

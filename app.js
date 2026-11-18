

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const depaertmentRoutes = require('./routes/departmentRoutes');
const postRoutes = require('./routes/postRoutes');


const connectDB = require('./config/db');



const app = express();

dotenv.config();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', depaertmentRoutes);
app.use('/api', postRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Flipkart API Some where in the middle  aqda qdfqfd aqdqq' );
});

app.listen(process.env.PORT, () => {
  //server Starting Point
    connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`App is running on http://localhost:${process.env.PORT}`);
});
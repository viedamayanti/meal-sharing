require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const mealsRouter = require('./api/meals');

const reservationRouter = require('./api/reservations');
const reviewRouter = require('./api/review');


const reservationRouter = require('./api/reservations');

const buildPath = path.join(__dirname, '../../dist');
const port = process.env.PORT || 5000;

//const reservationRouter = require('./api/reservations');
const buildPath = path.join(__dirname, '../dist');
const port = process.env.PORT || 3000;

const cors = require('cors');
const knex = require('./database');
// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use('/meals', mealsRouter);
//router.use('/reservations', reservationRouter);
app.get('/my-route', (req, res) => {
  res.send('Hi friend');
});

router.use('/reservations', reservationRouter);

router.use('/review', reviewRouter);

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw 'API_PATH is not set. Remember to set it in your .env file';
}



app.listen(port, () => console.log(`Server started on port ${port}`));


// for the frontend. Will first be covered in the react class
app.use('*', (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;

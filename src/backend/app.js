require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const mealsRouter = require('./api/meals');
const buildPath = path.join(__dirname, '../../dist');
const port = process.env.PORT || 5000;
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
app.get('/my-route', (req, res) => {
  res.send('Hi friend');
});

app.get('/future-meals', async (req, res) => {
  try {
    const [rows] = await knex.raw(
      'SELECT * FROM meal ORDER BY created_date DESC'
    );
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: 'Internal server error ' });
  }
});
app.get('/past-meals', async (req, res) => {
  try {
    const [rows] = await knex.raw(
      'SELECT * FROM meal ORDER BY created_date ASC'
    );
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: 'Internal server error' });
  }
});
app.get('/all-meals', async (req, res) => {
  try {
    const [rows] = await knex.raw('SELECT id, title FROM meal');
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: 'Internal server error' });
  }
});
app.get('/first-meals', async (req, res) => {
  try {
    const [rows] = await knex.raw('SELECT * FROM meal ORDER BY id LIMIT 1');
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: 'Internal server error' });
  }
});
app.get('/last-meals', async (req, res) => {
  try {
    const [rows] = await knex.raw(
      'SELECT * FROM meal ORDER BY id DESC LIMIT 1'
    );
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: 'Internal server error' });
  }
});

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw 'API_PATH is not set. Remember to set it in your .env file';
}

// for the frontend. Will first be covered in the react class
app.use('*', (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;

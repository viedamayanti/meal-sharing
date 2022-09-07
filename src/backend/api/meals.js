const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/', async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex('meals').select('title');
    response.json(titles);
  } catch (error) {
    throw error;
  }
});
router.get('/future-meals', async (req, res) => {
  const result = await knex.raw(
    `SELECT * FROM meal ORDER BY created_date DESC `
  );
  return res.json({
    meals: result[0],
  });
});
router.get('/past-meals', async (req, res) => {
  const result = await knex.raw(`SELECT * FROM meal ORDER BY created_date ASC`);
  return res.json({
    meals: result[0],
  });
});

router.get('/all-meals', async (req, res) => {
  const result = await knex.raw(`SELECT id, title FROM meal`);
  return res.json({
    meals: result[0],
  });
});
router.get('/first-meals', async (req, res) => {
  const result = await knex.raw(`SELECT * FROM meal ORDER BY id LIMIT 1`);
  return res.json({
    meals: result[0],
  });
});
router.get('/last-meals', async (req, res) => {
  const result = await knex.raw(`SELECT * FROM meal ORDER BY id DESC LIMIT 1`);
  return res.json({
    meals: result[0],
  });
});

module.exports = router;

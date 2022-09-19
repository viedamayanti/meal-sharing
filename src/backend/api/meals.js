const express = require('express');
const router = express.Router();
const knex = require('../database');

//let mealsQuery = knex('meals')
router.get('/', async (req, res) => {
  const result = await knex.raw(`SELECT * FROM meal`);
  return res.json({
    meals: result[0],
  });
});

router.post('/', async (req, res) => {
  const result = await knex('meals').insert(req.body);
  return res.json({
    msg: 'meals created',
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

const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/', async (req, res) => {
  try {
    const result = await knex.raw(`SELECT * FROM meal`);
    res.json({
      meals: result[0],
    });
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

router.get('/future-meals', async (req, res) => {
  try {
    const result = await knex.raw(
      `SELECT * FROM meal ORDER BY created_date DESC `
    );
    res.json({
      meals: result[0],
    });
  } catch {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

router.get('/past-meals', async (req, res) => {
  try {
    const result = await knex.raw(
      `SELECT * FROM meal ORDER BY created_date ASC`
    );
    res.json({
      meals: result[0],
    });
  } catch {
    res.status(500).json({ Msg: 'Internal server error' });
  }
=======
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
  try {
    const result = await knex.raw(`SELECT id, title FROM meal`);
    res.json({
      meals: result[0],
    });
  } catch {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});
router.get('/first-meals', async (req, res) => {
  try {
    const result = await knex.raw(`SELECT * FROM meal ORDER BY id LIMIT 1`);
    return res.json({
      meals: result[0],
    });
  } catch {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});
router.get('/last-meals', async (req, res) => {
  try {
    const result = await knex.raw(
      `SELECT * FROM meal ORDER BY id DESC LIMIT 1`
    );
    return res.json({
      meals: result[0],
    });
  } catch {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await knex.insert(req.body).into('meal');
    res.send(`ID number ${result} is created`);
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const paramsValue = req.params.id;
    const result = await knex('meal').where({ id: paramsValue });
    res.send(result);
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

//Update without hardcore
router.put('/:id', async (req, res) => {
  try {
    const paramsValue = req.params.id;
    const result = await knex('meal')
      .where({ id: paramsValue })
      .update({ price: 80 });
    res.send('Data is updated');
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const paramsValue = req.params.id;
    const result = await knex('meal').where({ id: paramsValue }).del();
    return res.send('Deleted meal');
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

module.exports = router;

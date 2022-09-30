// @ts-nocheck
const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/', async (req, res) => {
  let query = knex('meal');
  if ('maxPrice' in req.query) {
    query = query.where('price', '<', Number(req.query.maxPrice));
  }

  // Its does not work
  if ('availableReservations' in req.query) {
    query = query.join('reservation', () => {
      this.on('meal.id', '=', 'reservation.meal_id').orOn(
        'number_of_guests',
        '<',
        'meal.max_reservation'
      );
    });
  }

  if ('title' in req.query && typeof 'title' === 'string') {
    query = query.whereRaw('title LIKE?', [`%${req.query.title}%`]);
  }

  if ('dateAfter' in req.query) {
    query = query.where('created_date', '>', `${req.query.dateAfter}`);
  }

  if ('dateBefore' in req.query) {
    query = query.where('created_date', '<', `${req.query.dateBefore}`);
  }
  if (req.query.limit) {
    query = query.where(Number(req.query.limit));
  }

  if (req.query.sort_key) {
    if (eq.query.sort_dir) {
      query = query.orderBy(req.query.sort_key, sort_dir);
    } else {
      query = query.orderBy(req.query.sort_key, 'asc');
    }
  }
  try {
    const mealsRecord = await query;
    res.json(mealsRecord);
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await knex.insert(req.body).into('meal');
    res.json(`ID number ${result} is created`);
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const paramsValue = req.params.id;
    const result = await knex('meal').where({ id: paramsValue });
    res.json(result);
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

router.get('/:meal_id', async (req, res) => {
  try {
    const paramsValue = req.params.meal_id;
    const result = await knex('meal').whereRaw('title LIKE?', [
      `%${paramsValue}%`,
    ]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const paramsKey = req.params.id;
    const paramsValue = req.params;
    const result = await knex('meal')
      .where({ id: paramsKey })
      .update({ price: paramsValue });
    res.json(`Data ${result}updated`);
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

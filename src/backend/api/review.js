const express = require('express');
const router = express.Router();
const knex = require('../database');

//Get all review
router.get('/', async (req, res) => {
  try {
    const result = await knex.from('review').select();
    res.json(result);
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

//Post review
router.post('/', async (req, res) => {
  try {
    const result = await knex.insert(req.body).into('review');
    res.status(201).json('Review Created');
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

//Return review by id
router.get('/:id', async (req, res) => {
  try {
    const paramsValue = req.params.id;
    const result = await knex('review').where({ id: paramsValue });
    res.send(result);
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

//Update review by id
router.put('/:id', async (req, res) => {
  try {
    const paramsValue = req.params.id;
    const result = await knex('review')
      .where({ id: req.params.id })
      .update({ stars: 5 });
    return res.send('Data is updated');
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

//Delete review by id
router.delete('/:id', async (req, res) => {
  try {
    const paramsValue = req.params.id;
    const result = await knex('review').where({ id: paramsValue }).del();
    return res.json('Review is deleted');
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

module.exports = router;

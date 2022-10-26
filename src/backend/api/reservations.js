const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/', async (req, res) => {
  try {
    const result = await knex.from('reservation').select();
    res.json(result);
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await knex.insert(req.body).into('reservation');
    res.status(201).send('Created');
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const paramsValue = req.params.id;
    const result = await knex('reservation').where({ id: paramsValue });
    res.send(result);
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});


//Update without hardcore
router.put('/:id', async (req, res) => {
  try {
    const paramsValue = req.params.id;
    const result = await knex('reservation')
      .where({ id: req.params.id })
      .update({ contact_name: 'Vie dan Damayanti' });
    return res.send('Data is updated');
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});


//Does not work

router.delete('/:id', async (req, res) => {
  try {
    const paramsValue = req.params.id;
    const result = await knex('reservation').where({ id: paramsValue }).del();
    return res.send('Reservation is deleted');
  } catch (error) {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});


//availableReservations
router.get('/', async (req, res) => {
  const reservation = knex('reservation');
  const isAvailable = Number(req.query.availableReservations === '1');
  if (isAvailable) {
    const result = await reservation.where('availability', '=', isAvailable);
    res.json(result);
  } else {
    res.status(500).json({ Msg: 'Internal server error' });
  }
});

module.exports = router;

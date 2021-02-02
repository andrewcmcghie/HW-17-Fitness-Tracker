const router = require('express').Router();
const db = require('../models/');
const express = require('express');
// const Workout = require('../models/Workout');

router.get('/api/workouts', (req, res) => {
  db.Workout.find({})
    // .sort({ _id: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
router.get('/api/workouts/range', (req, res) => {
  db.Workout.find({})
    // .sort({ _id: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post('/api/workouts', (req, res) => {
  console.log('Tim Duncan Post Game');
  db.Workout.create(req.body)
    .then((dbWorkouts) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
  )
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

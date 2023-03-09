const express = require('express');
const router = express.Router();

// GET all shows
router.get('/', (req, res) => {
});

// GET one show
router.get('/:id', (req, res) => {
});

// GET shows of a particular genre (genre in req.params)
router.get('/genre/:genre', (req, res) => {
});

// PUT update rating of a show that has been watched
router.put('/:id/rating', (req, res) => {
});

// PUT update the status of a show
router.put('/:id/status', (req, res) => {
});

// DELETE a show
router.delete('/:id', (req, res) => {
});

module.exports = router;


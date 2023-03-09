const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
});

// GET one user
router.get('/:id', (req, res) => {
});

// GET all shows watched by a user (user id in req.params)
router.get('/:id/shows', (req, res) => {
});

// PUT update and add a show if a user has watched it
router.put('/:id/shows', (req, res) => {
});

module.exports = router;


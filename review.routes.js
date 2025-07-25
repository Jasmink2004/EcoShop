const express = require('express');
const router = express.Router();
const { getReviews, createReview } = require('../controllers/review.controller');

router.get('/', getReviews);
router.post('/', createReview);

module.exports = router;

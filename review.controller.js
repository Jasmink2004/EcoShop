const Review = require('../models/review.model');

exports.getReviews = async (req, res) => {
  const reviews = await Review.find().populate('product_id').populate('user_id');
  res.json(reviews);
};

exports.createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

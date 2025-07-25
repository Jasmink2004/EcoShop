const Product = require('../models/product.model');

exports.getProducts = async (req, res) => {
  const { category } = req.query;
  console.log('Querying with category:', category); // 1. Log received category
  let products;

  if (category) {
    // 2. Build filter and log it
    const filter = { categories: { $regex: new RegExp(category.trim(), "i") } };
    console.log('Filter used:', filter);

    // 3. Fetch products and log the result count
    products = await Product.find(filter);
    console.log('Products found:', products.length);
  } else {
    products = await Product.find();
  }

  res.json(products);
};

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,            // return the updated document
      runValidators: true,  // validate schema on update
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

import { Router } from 'express';
import Product from '../models/Product';

const router = Router();

router.get('/', async (req, res) => {
  const { category } = req.query;

  if (category) {
    const productsWithCategory = await Product.find({ category });

    return res.send(productsWithCategory);
  } else {
    const allProducts = await Product.find();

    return res.send(allProducts);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const productWithID = await Product.findOne({ _id: id });

  res.send(productWithID);
});

router.post('/create', async (req, res) => {
  const { title, category, description, image, price } = req.body;

  try {
    const productWithSameTitle = await Product.findOne({ title });

    if (productWithSameTitle) {
      return res
        .status(409)
        .send(`A product with the title "${title}" already exist`);
    }

    const newProduct = await Product.create({
      title,
      category,
      description,
      image,
      price: +price,
    });

    const savedProduct = await newProduct.save();

    return res.send(`The new product's id is ${savedProduct._id}`);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

export default router;

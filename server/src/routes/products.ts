import { Router } from 'express';
import Product from '../models/Product';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const allProducts = await Product.find({});

    return res.send(allProducts);
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const productWithID = await Product.findOne({ _id: id });

    res.send(productWithID);
  } catch (err) {
    console.error(err);
  }
});

router.get('/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const productsWithCategory = await Product.findOne({ category });

    res.send(productsWithCategory);
  } catch (err) {
    console.error(err);
  }
});

export default router;

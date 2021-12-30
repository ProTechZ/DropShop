import { Router } from 'express';
import User from '../models/User';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find({});

    return res.send(allUsers);
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userWithID = await User.findOne({ _id: id });

    res.send(userWithID);
  } catch (err) {
    console.error(err); 
  }
});

export default router;

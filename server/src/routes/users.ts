import { Router } from 'express';
import User from '../models/User';
import hashPassword from '../utility/hashPassword';
import createJWTCookie from '../utility/createJWTCookie';
import validateRegistration from '../middleware/validateRegistration';
import validateLogin from '../middleware/validateLogin';

const router = Router();

router.get('/register', validateRegistration, async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = await User.create({
    name,
    email,
    password: await hashPassword(password),
  });

  const { _id } = await newUser.save();
  return res.send(_id);
});

router.get('/login', validateLogin, async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  res.cookie('authCookie', createJWTCookie({ id: user._id }));

  return res.send('User has been successfully logged in');
});

router.get('/logout', async (req, res) => res.clearCookie('authCookie'));

export default router;

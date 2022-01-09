import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import { loginValidationSchema } from '../schemas/User';
import verifyPassword from '../utility/verifyPassword';

const validateLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  const { error } = loginValidationSchema.validate({
    email,
    password,
  });

  if (error?.details[0].message) {
    return res.status(403).send(error?.details[0].message);
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(403).send('Incorrect email');
  }

  const passwordsMatch = await verifyPassword(password, user.password);
  if (!passwordsMatch) return res.status(403).send('Incorrect password');

  next();
};

export default validateLogin;

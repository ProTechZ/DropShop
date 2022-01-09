import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import { registerValidationSchema } from '../schemas/User';

const validateRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  const { error } = registerValidationSchema.validate({
    name,
    email,
    password,
  });

  if (error?.details[0].message) {
    return res.status(403).send(error?.details[0].message);
  }

  const userWithSameEmail = await User.findOne({ email });

  if (userWithSameEmail) {
    return res
      .status(403)
      .send(`A user with the email ${email} already exists`);
  }

  next();
};

export default validateRegistration;

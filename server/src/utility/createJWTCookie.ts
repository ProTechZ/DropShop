import jwt from 'jsonwebtoken';

const createJWTCookie = (payload: any) => {
  const authCookie = jwt.sign(payload, process.env.JWT_KEY as string);

  return authCookie;
};

export default createJWTCookie;

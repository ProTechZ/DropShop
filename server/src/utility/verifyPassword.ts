import bcrypt from 'bcrypt';

const verifyPassword = async (password: string, hashedPassword: string) => {
  const isValid =  await bcrypt.compare(password, hashedPassword);
  return isValid
};

export default verifyPassword;

import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import productsRouter from './routes/products';
import usersRouter from './routes/users';
import authRouter from './routes/auth';

config();

mongoose.connect(process.env.DB_CONNECT!, (error) => {
  console.log('Connected to the MongoDB server');
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  try {
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`The server is listening at http://localhost:${PORT}`);
});

// USER AUTH
// ADMIN
// DEALS
// ORDERING

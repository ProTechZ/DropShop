import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productsRouter from './routes/products';
import usersRouter from './routes/users';
import cors from 'cors';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

mongoose.connect(process.env.DB_CONNECT!, (error) => {
  console.log('Connected to the MongoDB server');
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Set-Cookie'],
  })
);
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

app.listen(PORT, () => {
  console.log(`The server is listening at http://localhost:${PORT}`);
});

import dotenv from 'dotenv';
dotenv.config({
  path: 'src/config/variables.env',
});

import express, { Request, Response } from 'express';
import cors from 'cors';

import connectToDB from './core/database';
import routes from './routes';

const app = express();
app.use(cors());

// Data base
connectToDB();

// Routes
app.use('/api', routes.userRouter);
app.use('/api', routes.productRouter);

// Server
const PORT: number = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

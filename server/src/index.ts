import dotenv from 'dotenv';
dotenv.config({
  path: 'src/config/variables.env',
});

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import connectToDB from './core/database';
import routes from './routes';
import nameHandler from './middleware/nameHandler';

const app = express();
app.use(cors());
app.use(express.json());
app.use(nameHandler);
app.use(morgan('dev'));

// Data base
connectToDB();

// Routes
app.use('/api', routes.userRouter);
app.use('/api', routes.productRouter);
app.use('/api', routes.orderRouter);

// Server
const PORT: number = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

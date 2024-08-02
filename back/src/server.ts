import express, { Application } from 'express';
import cors from 'cors';
import indexRouter from './routes/indexRouter';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

const server: Application = express();

server.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

server.use(morgan('dev'));
server.use(express.json());

console.log('Registering routes...');
server.use('/', indexRouter);
console.log('Routes registered');

export default server;

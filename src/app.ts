/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorhandler from './app/middleware/globalErrorhandler';

const app: Application = express();

// parsar
app.use(express.json());
app.use(cors());


// application routes

app.use('/api/v1/students', StudentRoutes)
app.use('/api/v1/users', UserRoutes)

const getAController =  (req: Request, res: Response) => {
  res.send("i love you allah");
}

app.get('/', getAController);

// error handle 
app.use(globalErrorhandler)

export default app;
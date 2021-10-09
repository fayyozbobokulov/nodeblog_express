import * as express from 'express';
import { Request, Response, Application } from 'express';
import { AppError } from './utils/appError';

export class App {
  public app: Application;

  constructor(){
    this.app = express();
    this.configuration();
    this.routes();
  }

  private configuration(): void{
    this.app.set('port', process.env.PORT || 3001);
  }

  private routes() {
    // ... Route Handler
    // this.app.use('/api/users', userRouter);

    this.app.get('*', (req, res, next) => {
      next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
    });
  }
}












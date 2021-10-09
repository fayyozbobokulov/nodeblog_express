import * as express from 'express';
import { Request, Response, Application } from 'express';

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
  }
}












import { Router, Request, Response,NextFunction } from "express";
import { inject, injectable } from "inversify";
import { AuthService } from "./auth.service";
import { Symbols } from "./dependency/Symbols";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";

@injectable()
export class AuthRoute {
  router: Router;
  constructor(@inject(Symbols.AuthService) private readonly authService: AuthService){
    this.router = Router();
  }

  async signUp(req: Request, res: Response, next: NextFunction): Promise<void>{
    this.router.post('/signup', this.authService.signUp())
  }
}
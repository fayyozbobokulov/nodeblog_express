import { inject, injectable } from "inversify";
import { Symbols } from "./dependency/Symbols";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { UserRepository } from "./user.repository";

@injectable()
export class AuthService {
  constructor(@inject(Symbols.UserRepository) private readonly userRepository: UserRepository){}

  public async signUp(authCredentials: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentials);
  }



}
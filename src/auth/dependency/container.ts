import { Container } from "inversify";
import { AuthService } from "../auth.service";
import { UserRepository } from "../user.repository";
import { Symbols } from "./Symbols";

const container = new Container();

container.bind<UserRepository>(Symbols.UserRepository).to(UserRepository).inSingletonScope;
container.bind<AuthService>(Symbols.AuthService).to(AuthService).inSingletonScope;

export default Container;
import { EntityRepository, getRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
import bcrypt from 'bcrypt';
import { injectable } from "inversify";

const userRepository = getRepository(User);

@EntityRepository(User)
@injectable()
export class UserRepository extends Repository<User> {
  async signUp(authCredentials: AuthCredentialsDto){
    const { username, password } = authCredentials;
    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    console.log(user.password);

    try {
      await user.save();
      return 
    } catch (error) {
      console.log(typeof error.code);
      if (error.code === '23505') {
        throw new Error('The user already exists!');
      } else {
        throw new Error(error.message);
      }
    }
  }

  async validateUserPassword(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne({ username });
    console.log(user);

    if (user && (await (user).validatePassword(password))) {
      return username;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
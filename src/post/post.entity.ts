import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  message: any;

  @Column()
  author: string;

  @ManyToOne((type) => User, (user) => user.posts, { eager: false })
  user: User;

  @Column()
  userId: number;
}
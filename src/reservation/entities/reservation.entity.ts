import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { IsNotEmpty, IsString, IsDate } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  nomDesServices: string;

  @Column()
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @Column()
  @IsNotEmpty()
  @IsString()
  heure: string;

  @ManyToOne(() => User, (user) => user.reservation, {
    onDelete: 'CASCADE',
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: string;
}

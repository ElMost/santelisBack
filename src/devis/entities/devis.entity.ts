import { IsString, IsNotEmpty } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Devis {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  nomDesServices: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  frequence: string;

  @ManyToOne(() => User, (user) => user.devis, {
    onDelete: 'CASCADE',
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'userId' })
  user: User;
}

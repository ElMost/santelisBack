import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty, IsString, IsEmail, IsAlphanumeric } from 'class-validator';
import { Devis } from 'src/devis/entities/devis.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  nom: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  prenom: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;

  @Column({ default: 'user' })
  role: string;

  @OneToMany(() => Devis, (devis) => devis.user)
  devis: Devis[];

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservation: Reservation[];
}

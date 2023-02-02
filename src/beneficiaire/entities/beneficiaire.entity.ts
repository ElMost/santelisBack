import { Devis } from 'src/devis/entities/devis.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty, IsString, IsEmail, IsAlphanumeric } from 'class-validator';

@Entity()
export class Beneficiaire {
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

  @OneToMany(() => Devis, (devis) => devis.beneficiaire)
  devis: Devis[];

  @OneToMany(() => Reservation, (reservation) => reservation.beneficiaire)
  reservation: Reservation[];
}

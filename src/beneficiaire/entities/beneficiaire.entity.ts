// import { Devis } from 'src/devis/entities/devis.entity';
// import { Reservation } from 'src/reservation/entities/reservation.entity';
// import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

// @Entity()
// export class Beneficiaire {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column({
//     nullable: false,
//   })
//   nom: string;

//   @Column({
//     nullable: false,
//   })
//   prenom: string;

//   @Column({
//     nullable: false,
//     unique: true,
//   })
//   email: string;

//   @Column({
//     nullable: false,
//   })
//   password: string;

//   @OneToMany(
//     () => Reservation,
//     (reservationDeServices) => reservationDeServices.beneficiaire,
//   )
//   reservation: Reservation[];

//   @OneToMany(() => Devis, (devis) => devis.beneficiaire, {
//     onDelete: 'CASCADE',
//   })
//   devis: Devis[];
// }

import { Devis } from 'src/devis/entities/devis.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

@Entity()
export class Beneficiaire {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  nom: string;

  @Column({
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  prenom: string;

  @Column({
    nullable: false,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column({
    nullable: false,
  })
  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @OneToMany(
    () => Reservation,
    (reservationDeServices) => reservationDeServices.beneficiaire,
  )
  reservation: Reservation[];

  @OneToMany(() => Devis, (devis) => devis.beneficiaire, {
    onDelete: 'CASCADE',
  })
  devis: Devis[];
}

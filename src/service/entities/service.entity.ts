// import { Devis } from 'src/devis/entities/devis.entity';
// import { Reservation } from 'src/reservation/entities/reservation.entity';
// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   JoinTable,
//   ManyToMany,
// } from 'typeorm';

// @Entity()
// export class Service {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   nomDesServices: string;

//   @ManyToMany(() => Devis, { eager: false })
//   @JoinTable()
//   devis: Devis[];

//   @ManyToMany(() => Reservation, { eager: false })
//   @JoinTable()
//   reservation: Reservation[];
// }

import { Devis } from 'src/devis/entities/devis.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  nomDesServices: string;

  @ManyToMany(() => Devis, { eager: false })
  @JoinTable()
  devis: Devis[];

  @ManyToMany(() => Reservation, { eager: false })
  @JoinTable()
  reservation: Reservation[];
}

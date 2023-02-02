// import { Beneficiaire } from 'src/beneficiaire/entities/beneficiaire.entity';
// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   ManyToOne,
//   JoinColumn,
// } from 'typeorm';

// @Entity()
// export class Devis {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   nomDesServices: string;

//   @Column()
//   frequence: string;

//   @ManyToOne(() => Beneficiaire, (beneficiaire) => beneficiaire.devis, {
//     onDelete: 'CASCADE',
//     nullable: false,
//     eager: true,
//   })
//   @JoinColumn({ name: 'beneficiaireId' })
//   beneficiaire: Beneficiaire;
// }

import { IsString, IsNotEmpty } from 'class-validator';
import { Beneficiaire } from 'src/beneficiaire/entities/beneficiaire.entity';
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

  @ManyToOne(() => Beneficiaire, (beneficiaire) => beneficiaire.devis, {
    onDelete: 'CASCADE',
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'beneficiaireId' })
  beneficiaire: Beneficiaire;
}

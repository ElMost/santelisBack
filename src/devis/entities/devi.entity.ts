import { Beneficiaire } from 'src/beneficiaire/entities/beneficiaire.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
// import { Beneficiaire } from './beneficiaire.entity';

@Entity()
export class Devis {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nomDesServices: string;

  @Column()
  frequence: string;

  @ManyToOne(() => Beneficiaire, (beneficiaire) => beneficiaire.devis, {
    onDelete: 'CASCADE',
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'beneficiaireId' })
  beneficiaire: Beneficiaire;
}

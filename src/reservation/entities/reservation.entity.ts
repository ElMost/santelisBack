import { Beneficiaire } from 'src/beneficiaire/entities/beneficiaire.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

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

  @ManyToOne(() => Beneficiaire, (beneficiaire) => beneficiaire.reservation, {
    onDelete: 'CASCADE',
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'beneficiaireId' })
  beneficiaire: Beneficiaire;

  @Column()
  beneficiaireId: string;
}

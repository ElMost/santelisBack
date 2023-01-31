import { Beneficiaire } from 'src/beneficiaire/entities/beneficiaire.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class ReservationDeServices {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nomDesServices: string;

  @Column()
  date: Date;

  @Column()
  heure: string;

  @ManyToOne(
    () => Beneficiaire,
    (beneficiaire) => beneficiaire.reservationDeServices,
    {
      onDelete: 'CASCADE',
      nullable: false,
      eager: true,
    },
  )
  @JoinColumn({ name: 'beneficiaireId' })
  beneficiaire: Beneficiaire;
}

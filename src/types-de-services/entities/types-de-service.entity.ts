import { Devis } from 'src/devis/entities/devi.entity';
import { ReservationDeServices } from 'src/reservation-de-services/entities/reservation-de-service.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity()
export class TypeDeService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nomDesServices: string;

  @ManyToMany(() => Devis, { eager: false })
  @JoinTable()
  devis: Devis[];

  @ManyToMany(() => ReservationDeServices, { eager: false })
  @JoinTable()
  reservationDeServices: ReservationDeServices[];
}

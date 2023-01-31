import { Devis } from 'src/devis/entities/devi.entity';
import { ReservationDeServices } from 'src/reservation-de-services/entities/reservation-de-service.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Beneficiaire {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column({
  //   nullable: false,
  // })
  // amount: Number;

  @Column({
    nullable: false,
  })
  nom: string;

  @Column({
    nullable: false,
  })
  prenom: string;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;

  @OneToMany(
    () => ReservationDeServices,
    (reservationDeServices) => reservationDeServices.beneficiaire,
  )
  reservationDeServices: ReservationDeServices[];

  @OneToMany(() => Devis, (devis) => devis.beneficiaire, {
    onDelete: 'CASCADE',
  })
  devis: Devis[];
}

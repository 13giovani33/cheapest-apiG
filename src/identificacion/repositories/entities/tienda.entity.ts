import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EstadoCaptacion } from './estado-captacion.enum';
import { Pais } from './pais.entity';

@Entity('tiendas')
export class Tienda {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 50, unique: true })
  codigoInterno: string;

  @Column('varchar', { length: 255 })
  nombreComercial: string;

  @Column('varchar', { length: 255 })
  responsable: string;

  @Column('varchar', { length: 50, unique: true })
  rut: string;

  @Column('varchar', { length: 255 })
  direccion: string;

  @Column('varchar', { length: 30 })
  telefono: string;

  @Column({
    type: 'enum',
    enum: EstadoCaptacion,
    default: EstadoCaptacion.PROSPECTO_CREADO,
  })
  estadoCaptacion: EstadoCaptacion;

  @ManyToOne(() => Pais, { eager: true, nullable: false })
  @JoinColumn({ name: 'paisId' })
  pais: Pais;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
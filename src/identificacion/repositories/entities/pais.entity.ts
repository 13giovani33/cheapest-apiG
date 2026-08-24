import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Moneda } from './moneda.enum';

@Entity('paises')
export class Pais {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 100, unique: true })
  nombre: string;

  @Column({ type: 'enum', enum: Moneda })
  moneda: Moneda;
}
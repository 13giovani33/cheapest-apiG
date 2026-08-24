import { EstadoCaptacion } from '../repositories/entities';

export class TiendaResponseDto {
  id: string;
  codigoInterno: string;
  nombreComercial: string;
  responsable: string;
  rut: string;
  direccion: string;
  telefono: string;
  estadoCaptacion: EstadoCaptacion;
  pais: { id: string; nombre: string; moneda: string };
  createdAt: Date;
  updatedAt: Date;
}
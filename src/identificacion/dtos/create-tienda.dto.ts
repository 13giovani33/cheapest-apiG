import { IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateTiendaDto {
  @IsString()
  @MaxLength(50)
  codigoInterno: string;

  @IsString()
  @MaxLength(255)
  nombreComercial: string;

  @IsString()
  @MaxLength(255)
  responsable: string;

  @IsString()
  @MaxLength(50)
  rut: string;

  @IsString()
  @MaxLength(255)
  direccion: string;

  @IsString()
  @MaxLength(30)
  telefono: string;

  @IsUUID()
  paisId: string;
}
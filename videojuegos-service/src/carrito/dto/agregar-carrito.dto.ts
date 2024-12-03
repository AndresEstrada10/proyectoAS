import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class AgregarCarritoDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;  // videoId del videojuego

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsNotEmpty()
  @IsString()
  plataforma: string;

  @IsNotEmpty()
  @IsString()
  genero: string;
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('videojuegos') // Nombre de la tabla en la base de datos
export class Videojuego {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column()
  genero: string;

  @Column()
  plataforma: string;

  @Column()
  fecha_lanzamiento: Date;

  @Column()
  imagen_url: string;
}

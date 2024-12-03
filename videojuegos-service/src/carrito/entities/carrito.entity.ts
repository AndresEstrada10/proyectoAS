import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Videojuego } from '../../videojuegos/entities/videojuego.entity'; // Importa la entidad Videojuego

@Entity()
export class Carrito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  precio: number;

  @Column()
  plataforma: string;

  @Column()
  genero: string;

  // Relación con la entidad Videojuego
  @ManyToOne(() => Videojuego)
  @JoinColumn({ name: 'videojuegoId' })  // La columna de la relación
  videojuego: Videojuego;

  @Column()
  videojuegoId: number;  // Solo mantenemos esta columna para la relación
}

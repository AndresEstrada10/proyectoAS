import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('registro')
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('simple-array') // Para almacenar IDs de los videojuegos como una lista
  juegos: number[];

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @CreateDateColumn({ type: 'timestamp' }) // Fecha y hora automática
  fecha: Date;
}

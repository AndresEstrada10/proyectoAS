import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Videojuego } from './entities/videojuego.entity';

@Injectable()
export class VideojuegosService {
  constructor(
    @InjectRepository(Videojuego)
    private readonly videojuegosRepository: Repository<Videojuego>,
  ) {}

  findAll(): Promise<Videojuego[]> {
    return this.videojuegosRepository.find();
  }

  findOne(id: number): Promise<Videojuego> {
    return this.videojuegosRepository.findOneBy({ id });
  }

  create(videojuego: Videojuego): Promise<Videojuego> {
    return this.videojuegosRepository.save(videojuego);
  }

  async update(id: number, videojuego: Videojuego): Promise<Videojuego> {
    await this.videojuegosRepository.update(id, videojuego);
    return this.findOne(id);
  }

  delete(id: number): Promise<void> {
    return this.videojuegosRepository.delete(id).then(() => null);
  }
}

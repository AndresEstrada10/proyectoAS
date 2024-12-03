import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registro } from './entities/registro.entity';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(Registro)
    private readonly registroRepository: Repository<Registro>,
  ) {}

  // Guardar un nuevo registro de compra
  async create(data: { juegos: number[]; total: number }) {
    const registro = this.registroRepository.create(data);
    return this.registroRepository.save(registro);
  }

  // Obtener todos los registros de compras
  async findAll() {
    return this.registroRepository.find();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from './entities/carrito.entity';
import { AgregarCarritoDto } from './dto/agregar-carrito.dto';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,
  ) {}

  // Obtener todos los juegos en el carrito
  async obtenerCarrito(): Promise<Carrito[]> {
    return await this.carritoRepository.find();
  }

  // Agregar un videojuego al carrito
  async agregarAlCarrito(agregarCarritoDto: AgregarCarritoDto): Promise<Carrito> {
    // Verificar si el videojuego ya está en el carrito
    const videojuegoEnCarrito = await this.carritoRepository.findOne({
      where: { videojuegoId: agregarCarritoDto.id },
    });

    if (videojuegoEnCarrito) {
      // Si ya está en el carrito, lanzar error
      throw new Error('El videojuego ya está en el carrito');
    }

    // Crear un nuevo objeto carrito
    const nuevoCarrito = this.carritoRepository.create({
      nombre: agregarCarritoDto.nombre,
      precio: agregarCarritoDto.precio,
      plataforma: agregarCarritoDto.plataforma,
      genero: agregarCarritoDto.genero,
      videojuegoId: agregarCarritoDto.id, // Establecer el id del videojuego en el carrito
    });

    // Guardar en la base de datos
    return await this.carritoRepository.save(nuevoCarrito);
  }

  // Eliminar un videojuego del carrito
  async eliminarDelCarrito(id: string): Promise<boolean> {
    const carrito = await this.carritoRepository.findOne({
      where: { videojuegoId: parseInt(id) },
    });

    if (carrito) {
      await this.carritoRepository.remove(carrito);
      return true;
    }
    return false;
  }
}

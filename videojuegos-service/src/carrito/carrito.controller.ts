import { Controller, Post, Body, Get, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { AgregarCarritoDto } from './dto/agregar-carrito.dto';

@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  // Obtener todos los juegos en el carrito
  @Get()
  async obtenerCarrito() {
    try {
      const carrito = await this.carritoService.obtenerCarrito();
      return { carrito };
    } catch (error) {
      throw new HttpException('Error al obtener el carrito', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Agregar un juego al carrito
  @Post('agregar')
  async agregarAlCarrito(@Body() agregarCarritoDto: AgregarCarritoDto) {
    try {
      // Validar que el videojuego tenga los datos requeridos
      if (!agregarCarritoDto.id || !agregarCarritoDto.nombre || !agregarCarritoDto.precio) {
        throw new HttpException('Faltan datos del videojuego', HttpStatus.BAD_REQUEST);
      }

      // Llamar al servicio para agregar al carrito
      const resultado = await this.carritoService.agregarAlCarrito(agregarCarritoDto);
      return { message: 'Juego agregado al carrito', data: resultado };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException('Error al agregar al carrito', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  // Eliminar un videojuego del carrito
  @Delete(':id')
  async eliminarDelCarrito(@Param('id') id: string) {
    try {
      const resultado = await this.carritoService.eliminarDelCarrito(id);
      if (resultado) {
        return { message: 'Juego eliminado del carrito' };
      } else {
        throw new HttpException('Juego no encontrado en el carrito', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new HttpException('Error al eliminar del carrito', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

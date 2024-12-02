import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { VideojuegosService } from './videojuegos.service';
import { Videojuego } from './entities/videojuego.entity';

@Controller('videojuegos')
export class VideojuegosController {
  constructor(private readonly videojuegosService: VideojuegosService) {}

  @Get()
  findAll() {
    return this.videojuegosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.videojuegosService.findOne(id);
  }

  @Post()
  create(@Body() videojuego: Videojuego) {
    return this.videojuegosService.create(videojuego);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() videojuego: Videojuego) {
    return this.videojuegosService.update(id, videojuego);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.videojuegosService.delete(id);
  }
}

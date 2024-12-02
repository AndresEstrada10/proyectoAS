import { Controller, Post, Get, Body } from '@nestjs/common';
import { RegistroService } from './registro.service';

@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  // Endpoint para guardar un registro de compra
  @Post()
  create(@Body() data: { juegos: number[]; total: number }) {
    return this.registroService.create(data);
  }

  // Endpoint para obtener todos los registros
  @Get()
  findAll() {
    return this.registroService.findAll();
  }
}

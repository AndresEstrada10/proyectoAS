import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideojuegosService } from './videojuegos.service';
import { VideojuegosController } from './videojuegos.controller';
import { Videojuego } from './entities/videojuego.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Videojuego])],
  controllers: [VideojuegosController],
  providers: [VideojuegosService],
})
export class VideojuegosModule {}

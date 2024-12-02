import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideojuegosModule } from './videojuegos/videojuegos.module';
import { CarritoModule } from './carrito/carrito.module';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'videojuegos_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    VideojuegosModule,
    CarritoModule,
    RegistroModule,
  ],
})
export class AppModule {}

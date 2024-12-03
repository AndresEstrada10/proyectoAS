import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const isProduction = process.env.NODE_ENV === 'production';

  // Habilitar CORS para permitir solicitudes desde el frontend
  app.enableCors({
    origin: isProduction
      ? 'https://proyectoas-2.onrender.com' // Cambia al dominio de tu frontend en producción
      : 'http://localhost:3001', // Cambia al puerto donde corre tu frontend localmente
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Usar el puerto proporcionado por Render o el puerto 3000 por defecto
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(
    `Application is running on: ${isProduction ? 'https://proyectoas-2.onrender.com' : `http://localhost:${port}`}`
  );
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const serverConfig = config.get('server');
  const port = serverConfig.port;
  app.enableCors({
    origin: 'http://localhost:5173',
  });
  await app.listen(port);
  Logger.log(`Application running on port 3000`);
}
bootstrap();

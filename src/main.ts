import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3300;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  await app.listen(PORT, () =>
    console.log(`\n` + `Server is running on http://localhost:${PORT}`),
  );
}

bootstrap();

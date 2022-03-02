import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3300;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  await app.listen(port);
}
bootstrap().then(() => {
  console.log(`\n` + `Server is running on http://localhost:${port}`);
});

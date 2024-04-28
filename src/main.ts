import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { config } from 'dotenv';
import { join } from 'path';
import { MailerModule } from './mailer/mailer.module';
import { AppModule } from './main/app.module';
import { UserModule } from './user/user.module';

async function bootstrapMain() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

async function bootstrapMailer() {
  const app = await NestFactory.create(MailerModule);
  app.connectMicroservice({
    transport: Transport.NATS,
    options: {
      url: 'nats://localhost:4222',
    },
  });
  await app.startAllMicroservices();
  await app.init();
}

async function bootstrapUser() {
  const app = await NestFactory.create(UserModule);
  app.connectMicroservice({
    transport: Transport.NATS,
    options: {
      url: 'nats://localhost:4222',
    },
  });
  await app.startAllMicroservices();
  await app.init();
}

config({ path: join(__dirname, '../example.env') });
(async () => {
  const app = process.env.APP_NAME;

  switch (app) {
    case 'main':
      await bootstrapMain();
      console.log('Main module is running');
      break;
    case 'mailer':
      await bootstrapMailer();
      console.log('Mailer module is running');
      break;
    case 'user':
      await bootstrapUser();
      console.log('User module is running');
      break;
    default:
      console.log('All modules are running');
      await bootstrapMain();
      await bootstrapMailer();
      await bootstrapUser();
  }
})();

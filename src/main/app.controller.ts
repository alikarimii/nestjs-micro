import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { take } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(
    private readonly appService: AppService,
    @Inject('NATS_CLIENT') private readonly client: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send-mail')
  sendMail() {
    this.client.emit('send-mail', {
      email: '',
      text: 'Hello World',
    });
  }

  @Get('get-user')
  getUser() {
    return this.client.send('get-user', '1').pipe(take(1));
  }

  @Get('create-user')
  createUser() {
    this.logger.log('User created, AppController');
    return this.client
      .send('create-user', { name: 'John Doe 2', email: 'test@t.com' })
      .pipe(take(1));
  }
}

import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MailerService } from './mailer.service';

@Controller()
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @EventPattern('send-mail')
  sendMail(@Payload() data: { email: string; text: string }) {
    this.mailerService.sendMail(data);
  }

  @EventPattern('user-created')
  sendWelcomeMail(@Payload() data: { email: string; name: string }) {
    this.mailerService.sendMail({
      email: data.email,
      text: `dear ${data.name}, Welcome to our platform`,
    });
  }
}

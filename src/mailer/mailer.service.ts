import { Injectable } from '@nestjs/common';

@Injectable()
export class MailerService {
  sendMail(data: { email: string; text: string }): void {
    console.log('Mail sent: ', data);
  }
}

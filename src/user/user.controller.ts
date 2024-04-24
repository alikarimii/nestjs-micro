import { Controller, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private readonly userService: UserService) {}

  @MessagePattern('get-user')
  getUser(@Payload() id: string): { name: string } {
    return this.userService.getUser(id);
  }

  @MessagePattern('create-user')
  createUser(@Payload() data: { name: string }) {
    this.logger.log('User created, UserModule');
    return this.userService.createUser(data);
  }

  @EventPattern('user-created')
  handleUserCreated(@Payload() data: { name: string; email: string }) {
    console.log('User created:', data);
  }
}

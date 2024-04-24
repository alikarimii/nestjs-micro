import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    ClientsModule.registerAsync({
      isGlobal: true,
      clients: [
        {
          name: 'NATS_CLIENT',
          useFactory: () => ({
            transport: Transport.NATS,
            options: {
              url: 'nats://localhost:4222',
            },
          }),
        },
      ],
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

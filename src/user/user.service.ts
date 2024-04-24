import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(@Inject('NATS_CLIENT') private _natsClient: ClientProxy) {}
  private users = [{ name: 'John' }, { name: 'Doe' }];
  getUser(id: string) {
    return this.users[id];
  }
  createUser(data: { name: string }) {
    this.users.push(data);
    this._natsClient.emit('user-created', {
      name: data.name,
      email: 'after@create.com',
    });
    return data;
  }
}

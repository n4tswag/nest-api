import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { User } from 'src/users/users.etnity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invite } from 'src/invites/invites.etnity';
import { Event } from './events.etnity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [EventsService],
  controllers: [EventsController],
  imports: [
    TypeOrmModule.forFeature([User, Event, Invite]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ]
})
export class EventsModule {}

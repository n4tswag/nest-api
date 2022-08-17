import { Module } from '@nestjs/common';
import { InvitesService } from './invites.service';
import { InvitesController } from './invites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/events.etnity';
import { User } from 'src/users/users.etnity';
import { Invite } from './invites.etnity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [InvitesService],
  controllers: [InvitesController],
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
export class InvitesModule {}

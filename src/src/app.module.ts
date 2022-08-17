import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import "reflect-metadata"
import { User } from "./users/users.etnity";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.etnity";
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { Event } from "./events/events.etnity";
import { InvitesModule } from './invites/invites.module';
import { Invite } from "./invites/invites.etnity";

@Module({
    controllers: [],
    providers: [], 
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'nest_task',
            entities: [User, Role, Event, Invite],
            synchronize: true,
          }),
        UsersModule,
        RolesModule,
        AuthModule,
        EventsModule,
        InvitesModule,
    ]
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role } from './roles.etnity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.etnity';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    TypeOrmModule.forFeature([Role, User])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/roles/roles.etnity';
import { RolesService } from 'src/roles/roles.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.etnity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Role) private roleRepository: Repository<Role>,
        @InjectRepository(User) private userRepository: Repository<User>,
        private rolesService: RolesService
    ) {}

    async createUser(dto: CreateUserDto) {
        const role = await this.roleRepository.findOne({where:{value: 'USER'}})
        const user = await this.userRepository.create(dto)
        const userRole = await this.rolesService.getRoleByValue('USER')
        await this.userRepository.save(user)
        role.users = [user]
        user.roles = [userRole]
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.find({})
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where:{email}})
        return user
    }

}

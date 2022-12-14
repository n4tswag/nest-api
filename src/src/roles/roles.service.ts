import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.etnity';

@Injectable()
export class RolesService {

    constructor(
        @InjectRepository(Role) private roleRepository: Repository<Role>
    ) {}

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleRepository.create(dto)
        await this.roleRepository.save(role)
        return role
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {value}})
        return role
    }

}

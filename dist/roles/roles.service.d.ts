import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.etnity';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: Repository<Role>);
    createRole(dto: CreateRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
}

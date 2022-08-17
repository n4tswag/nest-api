import { Role } from 'src/roles/roles.etnity';
import { RolesService } from 'src/roles/roles.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.etnity';
export declare class UsersService {
    private roleRepository;
    private userRepository;
    private rolesService;
    constructor(roleRepository: Repository<Role>, userRepository: Repository<User>, rolesService: RolesService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
}

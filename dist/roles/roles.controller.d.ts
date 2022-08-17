import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    create(roleDto: CreateRoleDto): Promise<import("./roles.etnity").Role>;
    getByValue(value: string): Promise<import("./roles.etnity").Role>;
}

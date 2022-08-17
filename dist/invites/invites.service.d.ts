import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.etnity';
import { Repository } from 'typeorm';
import { Invite } from './invites.etnity';
export declare class InvitesService {
    private inviteRepository;
    private userRepository;
    constructor(inviteRepository: Repository<Invite>, userRepository: Repository<User>);
    createInvite(userDto: CreateUserDto): Promise<Invite>;
    viewMyInvites(userDto: CreateUserDto): Promise<Invite[]>;
    acceptInvite(userDto: CreateUserDto, id: any): Promise<import("typeorm").UpdateResult>;
    rejectInvite(userDto: CreateUserDto, id: any): Promise<import("typeorm").UpdateResult>;
    deleteInvite(userDto: CreateUserDto, id: any): Promise<import("typeorm").DeleteResult>;
}

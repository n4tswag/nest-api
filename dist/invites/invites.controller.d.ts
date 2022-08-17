import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { InvitesService } from './invites.service';
export declare class InvitesController {
    private inviteService;
    constructor(inviteService: InvitesService);
    createInvite(userDto: CreateUserDto): void;
    viewMyInvites(userDto: CreateUserDto): void;
    acceptInvite(userDto: CreateUserDto, id: any): void;
    rejectInvite(userDto: CreateUserDto, id: any): void;
    deleteEvent(userDto: CreateUserDto, id: any): void;
}

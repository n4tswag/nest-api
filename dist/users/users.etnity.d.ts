import { Event } from "src/events/events.etnity";
import { Invite } from "src/invites/invites.etnity";
import { Role } from "src/roles/roles.etnity";
export declare class User {
    id: number;
    email: string;
    password: string;
    events: Event[];
    invites: Invite[];
    roles: Role[];
}

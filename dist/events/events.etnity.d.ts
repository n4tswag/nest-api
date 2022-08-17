import { Invite } from "src/invites/invites.etnity";
import { User } from "src/users/users.etnity";
export declare class Event {
    id: number;
    title: string;
    invites: Invite[];
    eventCreator: User;
}

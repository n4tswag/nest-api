import { Event } from "src/events/events.etnity";
import { User } from "src/users/users.etnity";
export declare class Invite {
    id: number;
    status: string;
    guest: User;
    events: Event;
}

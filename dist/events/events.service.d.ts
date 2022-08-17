import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './events.etnity';
import { User } from 'src/users/users.etnity';
export declare class EventsService {
    private eventRepository;
    private userRepository;
    constructor(eventRepository: Repository<Event>, userRepository: Repository<User>);
    createEvent(eventDto: CreateEventDto, userDto: CreateUserDto): Promise<Event>;
    getAllEvents(eventDto: CreateEventDto, userDto: CreateUserDto): Promise<Event[]>;
    getEventById(eventDto: CreateEventDto, userDto: CreateUserDto, id: any): Promise<import("typeorm").SelectQueryBuilder<Event>>;
    updateEvent(eventUpdateDto: CreateEventDto, userDto: CreateUserDto, id: any): Promise<import("typeorm").UpdateResult>;
    deleteEvent(eventDto: CreateEventDto, userDto: CreateUserDto, id: any): Promise<import("typeorm").DeleteResult>;
}

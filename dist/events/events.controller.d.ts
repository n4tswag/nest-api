import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';
export declare class EventsController {
    private eventService;
    constructor(eventService: EventsService);
    createEvent(eventDto: CreateEventDto, userDto: CreateUserDto): void;
    getAllEvents(eventDto: CreateEventDto, userDto: CreateUserDto): void;
    getEventById(eventDto: CreateEventDto, userDto: CreateUserDto, id: any): void;
    updateEvent(eventDto: CreateEventDto, userDto: CreateUserDto, id: any): void;
    deleteEvent(eventDto: CreateEventDto, userDto: CreateUserDto, id: any): void;
}

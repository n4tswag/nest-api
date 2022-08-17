import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {

    constructor(private eventService: EventsService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    createEvent(@Body() eventDto: CreateEventDto, userDto: CreateUserDto) {
        this.eventService.createEvent(eventDto, userDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllEvents(@Body() eventDto: CreateEventDto, userDto: CreateUserDto) {
        this.eventService.getAllEvents(eventDto, userDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getEventById(@Body() eventDto: CreateEventDto, userDto: CreateUserDto, id) {
        this.eventService.getEventById(eventDto, userDto, id)
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    updateEvent(@Body() eventDto: CreateEventDto, userDto: CreateUserDto, id) {
        this.eventService.updateEvent(eventDto, userDto, id)
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    deleteEvent(@Body() eventDto: CreateEventDto, userDto: CreateUserDto, id) {
        this.eventService.deleteEvent(eventDto, userDto, id)
    }

}

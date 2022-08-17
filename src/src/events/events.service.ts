import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './events.etnity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.etnity';

@Injectable()
export class EventsService {

    constructor( @InjectRepository(Event) private eventRepository: Repository<Event>,
    @InjectRepository(User) private userRepository: Repository<User>) {}

    async createEvent(eventDto: CreateEventDto, userDto: CreateUserDto) {
        const user = await this.userRepository.findOne({where: {email: userDto.email}})
        if (!user){
            throw new HttpException('User with such email does not exists', HttpStatus.BAD_REQUEST)
        }
        const event = await this.eventRepository.create(eventDto)
        await this.eventRepository.save(event)
        user.events = [event]
        return event
    }

    async getAllEvents(eventDto: CreateEventDto, userDto: CreateUserDto) {
        const user = await this.userRepository.findOne({where: {email: userDto.email}})
        if (!user){
            throw new HttpException('User with such email does not exists', HttpStatus.BAD_REQUEST)
        }
        const events = await this.eventRepository.find({relations: {eventCreator: true}})
        return(events)
    }

    async getEventById(eventDto: CreateEventDto, userDto: CreateUserDto, id) {
        const user = await this.userRepository.findOne({where: {email: userDto.email}})
        if (!user){
            throw new HttpException('User with such email does not exists', HttpStatus.BAD_REQUEST)
        }
        const event = await this.eventRepository.findOne({where : {id: id}, relations: {eventCreator: true}})
        return await this.eventRepository
            .createQueryBuilder('event')
            .leftJoinAndSelect('event.invites', 'invites')
            .where({id: event.id})
    }

    async updateEvent(eventUpdateDto: CreateEventDto, userDto: CreateUserDto, id) {
        const user = await this.userRepository.findOne({where: {email: userDto.email}})
        if (!user){
            throw new HttpException('User with such email does not exists', HttpStatus.BAD_REQUEST)
        }
        const event = await this.eventRepository.findOne({where : {id: id}, relations: {eventCreator: true}})
        return await this.eventRepository
            .createQueryBuilder()
            .update(event)
            .set({title: eventUpdateDto.title})
            .execute()
    }

    async deleteEvent(eventDto: CreateEventDto, userDto: CreateUserDto, id) {
        const user = await this.userRepository.findOne({where: {email: userDto.email}})
        if (!user){
            throw new HttpException('User with such email does not exists', HttpStatus.BAD_REQUEST)
        }
        const event = await this.eventRepository.findOne({where : {id: id}, relations: {eventCreator: true}})
        return await this.eventRepository
            .createQueryBuilder()
            .delete()
            .from(Event)
            .where({id: event.id})
            .execute()
    }

}

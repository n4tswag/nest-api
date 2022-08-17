"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const events_etnity_1 = require("./events.etnity");
const users_etnity_1 = require("../users/users.etnity");
let EventsService = class EventsService {
    constructor(eventRepository, userRepository) {
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
    }
    async createEvent(eventDto, userDto) {
        const user = await this.userRepository.findOne({ where: { email: userDto.email } });
        if (!user) {
            throw new common_1.HttpException('User with such email does not exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const event = await this.eventRepository.create(eventDto);
        await this.eventRepository.save(event);
        user.events = [event];
        return event;
    }
    async getAllEvents(eventDto, userDto) {
        const user = await this.userRepository.findOne({ where: { email: userDto.email } });
        if (!user) {
            throw new common_1.HttpException('User with such email does not exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const events = await this.eventRepository.find({ relations: { eventCreator: true } });
        return (events);
    }
    async getEventById(eventDto, userDto, id) {
        const user = await this.userRepository.findOne({ where: { email: userDto.email } });
        if (!user) {
            throw new common_1.HttpException('User with such email does not exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const event = await this.eventRepository.findOne({ where: { id: id }, relations: { eventCreator: true } });
        return await this.eventRepository
            .createQueryBuilder('event')
            .leftJoinAndSelect('event.invites', 'invites')
            .where({ id: event.id });
    }
    async updateEvent(eventUpdateDto, userDto, id) {
        const user = await this.userRepository.findOne({ where: { email: userDto.email } });
        if (!user) {
            throw new common_1.HttpException('User with such email does not exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const event = await this.eventRepository.findOne({ where: { id: id }, relations: { eventCreator: true } });
        return await this.eventRepository
            .createQueryBuilder()
            .update(event)
            .set({ title: eventUpdateDto.title })
            .execute();
    }
    async deleteEvent(eventDto, userDto, id) {
        const user = await this.userRepository.findOne({ where: { email: userDto.email } });
        if (!user) {
            throw new common_1.HttpException('User with such email does not exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const event = await this.eventRepository.findOne({ where: { id: id }, relations: { eventCreator: true } });
        return await this.eventRepository
            .createQueryBuilder()
            .delete()
            .from(events_etnity_1.Event)
            .where({ id: event.id })
            .execute();
    }
};
EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(events_etnity_1.Event)),
    __param(1, (0, typeorm_1.InjectRepository)(users_etnity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map
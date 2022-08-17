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
exports.EventsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const create_event_dto_1 = require("./dto/create-event.dto");
const events_service_1 = require("./events.service");
let EventsController = class EventsController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    createEvent(eventDto, userDto) {
        this.eventService.createEvent(eventDto, userDto);
    }
    getAllEvents(eventDto, userDto) {
        this.eventService.getAllEvents(eventDto, userDto);
    }
    getEventById(eventDto, userDto, id) {
        this.eventService.getEventById(eventDto, userDto, id);
    }
    updateEvent(eventDto, userDto, id) {
        this.eventService.updateEvent(eventDto, userDto, id);
    }
    deleteEvent(eventDto, userDto, id) {
        this.eventService.deleteEvent(eventDto, userDto, id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_dto_1.CreateEventDto, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "createEvent", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_dto_1.CreateEventDto, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "getAllEvents", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_dto_1.CreateEventDto, create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "getEventById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_dto_1.CreateEventDto, create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "updateEvent", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_dto_1.CreateEventDto, create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "deleteEvent", null);
EventsController = __decorate([
    (0, common_1.Controller)('events'),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], EventsController);
exports.EventsController = EventsController;
//# sourceMappingURL=events.controller.js.map
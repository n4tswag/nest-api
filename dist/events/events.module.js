"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsModule = void 0;
const common_1 = require("@nestjs/common");
const events_service_1 = require("./events.service");
const events_controller_1 = require("./events.controller");
const users_etnity_1 = require("../users/users.etnity");
const typeorm_1 = require("@nestjs/typeorm");
const invites_etnity_1 = require("../invites/invites.etnity");
const events_etnity_1 = require("./events.etnity");
const jwt_1 = require("@nestjs/jwt");
let EventsModule = class EventsModule {
};
EventsModule = __decorate([
    (0, common_1.Module)({
        providers: [events_service_1.EventsService],
        controllers: [events_controller_1.EventsController],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([users_etnity_1.User, events_etnity_1.Event, invites_etnity_1.Invite]),
            jwt_1.JwtModule.register({
                secret: process.env.PRIVATE_KEY || 'SECRET',
                signOptions: {
                    expiresIn: '24h'
                }
            })
        ]
    })
], EventsModule);
exports.EventsModule = EventsModule;
//# sourceMappingURL=events.module.js.map
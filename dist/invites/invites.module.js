"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitesModule = void 0;
const common_1 = require("@nestjs/common");
const invites_service_1 = require("./invites.service");
const invites_controller_1 = require("./invites.controller");
const typeorm_1 = require("@nestjs/typeorm");
const events_etnity_1 = require("../events/events.etnity");
const users_etnity_1 = require("../users/users.etnity");
const invites_etnity_1 = require("./invites.etnity");
const jwt_1 = require("@nestjs/jwt");
let InvitesModule = class InvitesModule {
};
InvitesModule = __decorate([
    (0, common_1.Module)({
        providers: [invites_service_1.InvitesService],
        controllers: [invites_controller_1.InvitesController],
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
], InvitesModule);
exports.InvitesModule = InvitesModule;
//# sourceMappingURL=invites.module.js.map
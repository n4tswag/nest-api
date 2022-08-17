"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const roles_etnity_1 = require("../roles/roles.etnity");
const roles_module_1 = require("../roles/roles.module");
const users_controller_1 = require("./users.controller");
const users_etnity_1 = require("./users.etnity");
const users_service_1 = require("./users.service");
const events_etnity_1 = require("../events/events.etnity");
const invites_etnity_1 = require("../invites/invites.etnity");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([users_etnity_1.User, roles_etnity_1.Role, events_etnity_1.Event, invites_etnity_1.Invite]),
            roles_module_1.RolesModule,
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule)
        ],
        exports: [
            users_service_1.UsersService,
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map
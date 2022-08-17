"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
require("reflect-metadata");
const users_etnity_1 = require("./users/users.etnity");
const roles_module_1 = require("./roles/roles.module");
const roles_etnity_1 = require("./roles/roles.etnity");
const auth_module_1 = require("./auth/auth.module");
const events_module_1 = require("./events/events.module");
const events_etnity_1 = require("./events/events.etnity");
const invites_module_1 = require("./invites/invites.module");
const invites_etnity_1 = require("./invites/invites.etnity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'nest_task',
                entities: [users_etnity_1.User, roles_etnity_1.Role, events_etnity_1.Event, invites_etnity_1.Invite],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            events_module_1.EventsModule,
            invites_module_1.InvitesModule,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
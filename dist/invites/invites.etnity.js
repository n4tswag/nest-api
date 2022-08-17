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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invite = void 0;
const swagger_1 = require("@nestjs/swagger");
const events_etnity_1 = require("../events/events.etnity");
const users_etnity_1 = require("../users/users.etnity");
const typeorm_1 = require("typeorm");
let Invite = class Invite {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Invite.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, default: 'no response' }),
    __metadata("design:type", String)
], Invite.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_etnity_1.User, guest => guest.invites),
    __metadata("design:type", users_etnity_1.User)
], Invite.prototype, "guest", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => events_etnity_1.Event, event => event.invites),
    __metadata("design:type", events_etnity_1.Event)
], Invite.prototype, "events", void 0);
Invite = __decorate([
    (0, typeorm_1.Entity)({ name: 'invites' })
], Invite);
exports.Invite = Invite;
//# sourceMappingURL=invites.etnity.js.map
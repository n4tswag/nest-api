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
exports.Event = void 0;
const swagger_1 = require("@nestjs/swagger");
const invites_etnity_1 = require("../invites/invites.etnity");
const users_etnity_1 = require("../users/users.etnity");
const typeorm_1 = require("typeorm");
let Event = class Event {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Antwerp MAJOR', description: 'Major CS:GO tournament' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => invites_etnity_1.Invite, invite => invite.events),
    __metadata("design:type", Array)
], Event.prototype, "invites", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_etnity_1.User, eventCreator => eventCreator.events),
    __metadata("design:type", users_etnity_1.User)
], Event.prototype, "eventCreator", void 0);
Event = __decorate([
    (0, typeorm_1.Entity)({ name: 'events' })
], Event);
exports.Event = Event;
//# sourceMappingURL=events.etnity.js.map
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
exports.Role = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_etnity_1 = require("../users/users.etnity");
const typeorm_1 = require("typeorm");
let Role = class Role {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Role.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Admin', description: 'role' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true, nullable: false }),
    __metadata("design:type", String)
], Role.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Administrator', description: 'description' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => users_etnity_1.User, user => user.roles),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
Role = __decorate([
    (0, typeorm_1.Entity)({ name: 'roles' })
], Role);
exports.Role = Role;
//# sourceMappingURL=roles.etnity.js.map
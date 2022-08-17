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
exports.InvitesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_etnity_1 = require("../users/users.etnity");
const typeorm_2 = require("typeorm");
const invites_etnity_1 = require("./invites.etnity");
let InvitesService = class InvitesService {
    constructor(inviteRepository, userRepository) {
        this.inviteRepository = inviteRepository;
        this.userRepository = userRepository;
    }
    async createInvite(userDto) {
        const user = await this.userRepository.findOne({ where: { email: userDto.email } });
        if (!user) {
            throw new common_1.HttpException('User with such email does not exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const invite = await this.inviteRepository.create();
        await this.inviteRepository.save(invite);
        user.invites = [invite];
        return invite;
    }
    async viewMyInvites(userDto) {
        const user = await this.userRepository.findOne({ where: { email: userDto.email } });
        if (!user) {
            throw new common_1.HttpException('User with such email does not exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const invites = await this.inviteRepository.find({ relations: { guest: true } });
        return (invites);
    }
    async acceptInvite(userDto, id) {
        const user = await this.userRepository.findOne({ where: { email: userDto.email } });
        if (!user) {
            throw new common_1.HttpException('User with such email does not exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const invite = await this.inviteRepository.findOne({ where: { id: id }, relations: { guest: true } });
        return await this.inviteRepository
            .createQueryBuilder()
            .update(invite)
            .set({ status: 'accepted' })
            .execute();
    }
    async rejectInvite(userDto, id) {
        const user = await this.userRepository.findOne({ where: { email: userDto.email } });
        if (!user) {
            throw new common_1.HttpException('User with such email does not exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const invite = await this.inviteRepository.findOne({ where: { id: id }, relations: { guest: true } });
        return await this.inviteRepository
            .createQueryBuilder()
            .update(invite)
            .set({ status: 'rejected' })
            .execute();
    }
    async deleteInvite(userDto, id) {
        const user = await this.userRepository.findOne({ where: { email: userDto.email } });
        if (!user) {
            throw new common_1.HttpException('User with such email does not exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const invite = await this.inviteRepository.findOne({ where: { id: id }, relations: { guest: true } });
        return await this.inviteRepository
            .createQueryBuilder()
            .delete()
            .from(invites_etnity_1.Invite)
            .where({ id: invite.id })
            .execute();
    }
};
InvitesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(invites_etnity_1.Invite)),
    __param(1, (0, typeorm_1.InjectRepository)(users_etnity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], InvitesService);
exports.InvitesService = InvitesService;
//# sourceMappingURL=invites.service.js.map
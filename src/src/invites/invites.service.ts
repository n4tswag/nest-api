import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.etnity';
import { Repository } from 'typeorm';
import { Invite } from './invites.etnity';

@Injectable()
export class InvitesService {

    constructor(@InjectRepository(Invite) private inviteRepository: Repository<Invite>,
    @InjectRepository(User) private userRepository: Repository<User>) {}

    async createInvite(userDto: CreateUserDto) {
        const user = await this.userRepository.findOne({where: {email: userDto.email}})
        if (!user){
            throw new HttpException('User with such email does not exists', HttpStatus.BAD_REQUEST)
        }
        const invite = await this.inviteRepository.create()
        await this.inviteRepository.save(invite)
        user.invites = [invite]
        return invite
    }

    async viewMyInvites(userDto: CreateUserDto) {
        const user = await this.userRepository.findOne({where: {email: userDto.email}})
        if (!user){
            throw new HttpException('User with such email does not exists', HttpStatus.BAD_REQUEST)
        }
        const invites = await this.inviteRepository.find({relations: {guest: true}})
        return(invites)
    }

    async acceptInvite(userDto: CreateUserDto, id) {
        const user = await this.userRepository.findOne({where: {email: userDto.email}})
        if (!user){
            throw new HttpException('User with such email does not exists', HttpStatus.BAD_REQUEST)
        }
        const invite = await this.inviteRepository.findOne({where : {id: id}, relations: {guest: true}})
        return await this.inviteRepository
            .createQueryBuilder()
            .update(invite)
            .set({status: 'accepted'})
            .execute()
    }

    async rejectInvite(userDto: CreateUserDto, id) {
        const user = await this.userRepository.findOne({where: {email: userDto.email}})
        if (!user){
            throw new HttpException('User with such email does not exists', HttpStatus.BAD_REQUEST)
        }
        const invite = await this.inviteRepository.findOne({where : {id: id}, relations: {guest: true}})
        return await this.inviteRepository
            .createQueryBuilder()
            .update(invite)
            .set({status: 'rejected'})
            .execute()
    }

    async deleteInvite(userDto: CreateUserDto, id) {
        const user = await this.userRepository.findOne({where: {email: userDto.email}})
        if (!user){
            throw new HttpException('User with such email does not exists', HttpStatus.BAD_REQUEST)
        }
        const invite = await this.inviteRepository.findOne({where : {id: id}, relations: {guest: true}})
        return await this.inviteRepository
            .createQueryBuilder()
            .delete()
            .from(Invite)
            .where({id: invite.id})
            .execute()
    }
}

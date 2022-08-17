import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreateInviteDto } from './dto/create-invite.dto';
import { InvitesService } from './invites.service';

@Controller('invites')
export class InvitesController {

    constructor(private inviteService: InvitesService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    createInvite(@Body() userDto: CreateUserDto) {
        this.inviteService.createInvite(userDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    viewMyInvites(@Body() userDto: CreateUserDto) {
        this.inviteService.viewMyInvites(userDto)
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    acceptInvite(@Body() userDto: CreateUserDto, id) {
        this.inviteService.acceptInvite(userDto, id)
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    rejectInvite(@Body() userDto: CreateUserDto, id) {
        this.inviteService.rejectInvite(userDto, id)
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    deleteEvent(@Body() userDto: CreateUserDto, id) {
        this.inviteService.deleteInvite(userDto, id)
    }
}

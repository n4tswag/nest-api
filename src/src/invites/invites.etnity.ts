import { ApiProperty } from "@nestjs/swagger"
import { Event } from "src/events/events.etnity"
import { User } from "src/users/users.etnity"
import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, ManyToOne } from "typeorm"

@Entity({ name: 'invites' })
export class Invite {
    @ApiProperty({example: '1', description: 'ID'})
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number

    @   Column({ type: 'varchar', length: 255, nullable: false, default: 'no response' })
    status: string

    @ManyToOne(() => User, guest => guest.invites)
    guest: User

    @ManyToOne(() => Event, event => event.invites)
    events: Event
}
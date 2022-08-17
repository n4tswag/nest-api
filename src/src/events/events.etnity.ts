import { ApiProperty } from "@nestjs/swagger"
import { Invite } from "src/invites/invites.etnity"
import { User } from "src/users/users.etnity"
import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, ManyToOne, OneToMany } from "typeorm"

@Entity({ name: 'events' })
export class Event {
    @ApiProperty({example: '1', description: 'ID'})
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number

    @ApiProperty({example: 'Antwerp MAJOR', description: 'Major CS:GO tournament'})
    @   Column({ type: 'varchar', length: 255, nullable: false })
    title: string

    @OneToMany(() => Invite, invite => invite.events)
    invites: Invite[]

    @ManyToOne(() => User, eventCreator => eventCreator.events)
    eventCreator: User

}
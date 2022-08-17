import { ApiProperty } from "@nestjs/swagger"
import { Event } from "src/events/events.etnity"
import { Invite } from "src/invites/invites.etnity"
import { Role } from "src/roles/roles.etnity"
import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm"

@Entity({ name: 'users' })
export class User {
    @ApiProperty({example: '1', description: 'ID'})
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number

    @ApiProperty({example: 'user@gmail.com', description: 'e-mail'})
    @   Column({ type: 'varchar', length: 255, unique: true, nullable: false })
    email: string

    @ApiProperty({example: '123456789', description: 'password'})
    @Column({type: 'varchar', length: 255, nullable: false })
    password: string

    @OneToMany(() => Event, event => event.eventCreator)
    events: Event[]

    @OneToMany(() => Invite, invite => invite.guest)
    invites: Invite[]

    @ManyToMany(() => Role, role => role.users)
    @JoinTable()
    roles: Role[]

}
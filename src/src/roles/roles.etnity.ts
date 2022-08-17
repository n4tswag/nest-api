import { ApiProperty } from "@nestjs/swagger"
import { User } from "src/users/users.etnity"
import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, ManyToMany } from "typeorm"

@Entity({ name: 'roles' })
export class Role {
    @ApiProperty({example: '1', description: 'ID'})
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number

    @ApiProperty({example: 'Admin', description: 'role'})
    @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
    value: string

    @ApiProperty({example: 'Administrator', description: 'description'})
    @Column({type: 'varchar', length: 255, nullable: false })
    description: string

    @ManyToMany(() => User, user => user.roles)
    users : User[]

}
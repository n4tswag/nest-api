import { IsString } from "class-validator";

export class CreateInviteDto {
    @IsString({message: 'Must be a string'})
    readonly status: string;
}
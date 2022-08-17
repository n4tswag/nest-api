
import { IsString } from "class-validator";

export class CreateEventDto {
    @IsString({message: 'Must be a string'})
    readonly title: string;
}
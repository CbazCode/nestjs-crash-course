//Schema data transfer object cuando se realiza un paso de informacion desde el cliente al servidor

import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

//This class represents the fields that we expect the client to provide us as they create a new user
export class CreateUserDto {
    //----Descorador para swagger
    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(10)
    name: string
    @ApiProperty({required: false})
    age?:number
}
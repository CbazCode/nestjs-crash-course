import { ApiProperty } from "@nestjs/swagger";

//Schema de los tipos de datos cuando se hacen peticiones get
export class User {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
}
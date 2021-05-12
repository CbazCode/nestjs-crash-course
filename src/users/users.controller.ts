import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

//----Descorador para swagger
@ApiTags('Users')
//----Descorador para swagger
@Controller('users')
export class UsersController {

    //NestJS intancia la clase del servicio inmediatamente por detras no es necesario un new userServide
    constructor(private usersService: UsersService){
    }

    // @Get()
    // getUsers() :User[] {
    //     return this.usersService.findAll()
    // }

    //With querys
    @ApiQuery({name: 'name', required: false})
    @Get()
    getUsers(@Query('name') name:string) :User[] {
        return this.usersService.findAll(name)
    }

    // @Get(':id')
    // getUserById(@Param('id') id:string): User {

    //     const user = this.usersService.findById(Number(id))
    //     if(!user){
    //         throw new NotFoundException()
    //     }
    //     return user
    // }

    //With pipe: is like a middleware, en este caso nos ayudo para pasar de string a int rapidamente
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number): User {

        

        const user = this.usersService.findById(id)
        if(!user){
            throw new NotFoundException()
        }
        return user
    }
    //----Descorador para swagger
    @ApiCreatedResponse({type: User})
    //----Descorador para swagger
    @Post()
    //@Body -> reqBody
    createUser(@Body() body: CreateUserDto): User {
        return this.usersService.createUser(body);
    } 
}

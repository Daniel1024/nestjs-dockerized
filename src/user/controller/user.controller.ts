import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user.interface';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Post()
  add(@Body() user: UserInterface): Observable<UserInterface> {
    return this.userService.add(user);
  }

  @Get()
  findAll(): Observable<UserInterface[]> {
    return this.userService.findAll();
  }
}

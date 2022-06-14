import { UserService } from '../services/use-cases/users/users.service';
import { Controller, Get, Param } from '@nestjs/common';
import { UserDetails } from '../services/use-cases/users/user-details.interface';

@Controller('user')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails | null> {
    return this.userService.findById(id);
  }
}

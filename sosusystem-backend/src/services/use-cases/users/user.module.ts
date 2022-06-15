import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../../infrastructure/mongodb/schemas/users/user.schema';
import { UserService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

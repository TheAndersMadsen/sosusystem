import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDetails } from '../../../user/user-details.interface';
import { UserDocument } from '../../../infrastructure/mongodb/schemas/users/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  getUserDetails(user: UserDocument): UserDetails {
    return {
      id: user._id,
      name: user.name,
      username: user.username,
    };
  }

  async findByUsername(username: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async findById(id: string): Promise<UserDetails | null> {
    const user = await this.userModel.findById(id).exec();
    if (!user) return null;
    return this.getUserDetails(user);
  }

  async create(
    name: string,
    username: string,
    hashedPassword: string,
  ): Promise<UserDocument> {
    const newUser = new this.userModel({
      name,
      username,
      password: hashedPassword,
    });
    return newUser.save();
  }
}

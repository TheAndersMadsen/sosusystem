import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
require('dotenv').config();

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    const dbPort: string = process.env.MONGODB_PORT;
    return {
      uri: `mongodb://mongo:${dbPort}/db`,
    };
  }
}

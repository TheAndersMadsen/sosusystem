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
    const dbName: string = process.env.MONGODB_NAME;
    return {
      uri: `mongodb://mongo:${dbPort}/${dbName}`,
    };
  }
}

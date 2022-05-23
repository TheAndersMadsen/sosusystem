import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
require('dotenv').config();

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    const userName: string = process.env.MONGODB_USER_NAME;
    const password: string = process.env.MONGODB_USER_PASSWORD;
    const dbName: string = process.env.MONGODB_DB_NAME;
    console.log(`mongodb+srv://${userName}:${password}@sosu-db.qc7k5.mongodb.net/${dbName}?retryWrites=true&w=majority`)
    return {
      uri: `mongodb+srv://${userName}:${password}@185.51.76.10:27017/${dbName}?retryWrites=true&w=majority`,
    };
  }
}

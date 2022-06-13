import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../../infrastructure/mongodb/mongo-data-services.module';

@Module({
  imports: [MongoDataServicesModule],
  exports: [MongoDataServicesModule],
})
export class DataServicesModule {}

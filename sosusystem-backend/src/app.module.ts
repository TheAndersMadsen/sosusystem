import { Module } from '@nestjs/common';
import { SubjectServicesModule } from './services/use-cases/subjects/subjects-sevices.module';
import { MongoDataServicesModule } from './infrastructure/mongodb/mongo-data-services.module';
import { SubjectsController } from './controllers/subjects.controller';
//import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [MongoDataServicesModule, SubjectServicesModule],
  controllers: [SubjectsController],
  providers: [],
})
export class AppModule {}

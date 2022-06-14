import { Module } from '@nestjs/common';
import { SubjectsModule } from './services/use-cases/subjects/subjects.module';
import { AuthModule } from './authentication/auth.module';
import { MongoDataServicesModule } from './infrastructure/mongodb/mongo-data-services.module';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [MongoDataServicesModule, SubjectsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

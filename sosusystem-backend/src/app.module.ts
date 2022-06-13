import { Module } from '@nestjs/common';
import { SubjectServicesModule } from './services/use-cases/subject/subjects-sevices.module';
import { MongoDataServicesModule } from './infrastructure/mongodb/mongo-data-services.module';
import { SubjectsController } from './controllers/subjects.controller';
//import { APP_GUARD } from '@nestjs/core';
import { UserService } from './services/use-cases/user/user.service';
import { AuthService } from './auth/auth.service';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongoDataServicesModule,
    SubjectServicesModule,
    AuthModule,
    UserModule,
  ],
  controllers: [SubjectsController],
  providers: [],
})
export class AppModule {}

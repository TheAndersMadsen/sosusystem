import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from '../../../controllers/subjects.controller';
import { MongoDataServicesModule } from '../../../infrastructure/mongodb/mongo-data-services.module';
import { TitlesGenerator } from './utils/item-titles-generator';
import { AuthModule } from '../../authentication/auth.module';

@Module({
  imports: [MongoDataServicesModule, AuthModule],
  controllers: [SubjectsController],
  providers: [SubjectsService, TitlesGenerator],
  exports: [SubjectsService],
})
export class SubjectsModule {}

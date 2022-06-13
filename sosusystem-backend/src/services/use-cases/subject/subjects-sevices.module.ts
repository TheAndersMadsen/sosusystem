import { Module } from '@nestjs/common';
import { SubjectFactoryService } from './subject-factory.service';
import { SubjectServices } from './subjects.service';
import { DataServicesModule } from '../../data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [SubjectServices, SubjectFactoryService],
  exports: [SubjectServices, SubjectFactoryService],
})
export class SubjectServicesModule {}

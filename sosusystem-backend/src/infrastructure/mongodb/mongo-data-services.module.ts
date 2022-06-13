import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDataServices } from './mongo-data-services.service';
import { MongooseConfigService } from './mongo-config.service';
import { IDataServices } from '../../core';
import { Subject, SubjectSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }]),
    // MongooseModule.forRoot(Configuration.urlKEY),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}

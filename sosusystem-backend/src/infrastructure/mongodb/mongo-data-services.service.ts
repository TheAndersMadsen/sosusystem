import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  GeneralInformation,
  HealthCondition,
  IDataServices,
  IGenericRepository,
} from '../../core';
import { MongoGenericRepository } from './mongo-generic-repository.services';
import { GeneralInfoDocument, Subject, SubjectDocument } from './schemas';

@Injectable()
export class MongoDataServices
  implements OnApplicationBootstrap, IDataServices
{
  subjects: MongoGenericRepository<Subject>;

  constructor(
    @InjectModel(Subject.name)
    private SubjectRepository: Model<SubjectDocument>,
  ) {}

  onApplicationBootstrap() {
    this.subjects = new MongoGenericRepository<Subject>(this.SubjectRepository);
  }
}

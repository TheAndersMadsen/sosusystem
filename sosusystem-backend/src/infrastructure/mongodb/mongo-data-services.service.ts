import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../core';
import { MongoGenericRepository } from './mongo-generic-repository.services';
import { Subject, SubjectDocument } from './schemas';

@Injectable()
export class MongoDataServices
  implements OnApplicationBootstrap, IDataServices
{
  subjects: MongoGenericRepository<Subject>;

  constructor(
    @InjectModel(Subject.name)
    private ToDoRepository: Model<SubjectDocument>,
  ) {
    // this.subjectDocumentModel.db.db
    //   .dropDatabase()
    //   .then((r) => console.log('database dropped'));
    // DB-Collection Size Test
  }

  onApplicationBootstrap() {
    this.subjects = new MongoGenericRepository<Subject>(this.ToDoRepository);
  }
}

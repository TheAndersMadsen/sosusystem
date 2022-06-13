import { Injectable, NotFoundException } from '@nestjs/common';
import {
  SubjectDto,
  IDataServices,
  Subject,
} from '../../../core';
import { SubjectFactoryService } from './subject-factory.service';

@Injectable()

export class SubjectServices {
  constructor(
    private dataServices: IDataServices,
    private subjectFactoryService: SubjectFactoryService,
  ) {}

  async create(subjectDto: SubjectDto): Promise<Subject> {
    const subject = this.subjectFactoryService.createNewSubject(subjectDto);

    return await this.dataServices.subjects.create(subject);
  }
  
  async findAll(): Promise<Subject[]> {
    const subjects = await this.dataServices.subjects.findAll();

    return subjects;
  }


  async findOne(subjectId: string): Promise<Subject> {
    const subject = await this.dataServices.subjects.findOne(subjectId);

    return subject;
  }

  async update(subjectId: string, subjectDto: SubjectDto): Promise<Subject> {
    const subject = this.subjectFactoryService.updateSubject(subjectDto);

    return await this.dataServices.subjects
    .update(subjectId, subject)
    .catch(() => {
      throw new NotFoundException(`Subject with id: ${subjectId} not found!`);
    });
  }

  async remove(subjectId: string) {
    const removedSubject = await this.dataServices.subjects.delete(subjectId);

    return removedSubject;
  }

}

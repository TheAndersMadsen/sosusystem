import {
  Subject,
  SubjectDto
} from '../../../core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SubjectFactoryService {
  createNewSubject(subjectDto: SubjectDto) {
    const newToDo = new Subject();
    newToDo.firstName = subjectDto.firstName;
    newToDo.lastName = subjectDto.lastName;
    newToDo.email = subjectDto.email;
    newToDo.phone = subjectDto.phone;
    newToDo.address = subjectDto.address;
    newToDo.generalInformation = subjectDto.generalInformation;
    newToDo.healthConditions = subjectDto.healthConditions;
    newToDo.functionAbilities = subjectDto.functionAbilities;
    return newToDo;
  }

  updateSubject(subjectDto: SubjectDto) {
    const newSubject = new Subject();
    newSubject.firstName = subjectDto.firstName;
    newSubject.lastName = subjectDto.lastName;
    newSubject.email = subjectDto.email;
    newSubject.phone = subjectDto.phone;
    newSubject.address = subjectDto.address;
    newSubject.generalInformation = subjectDto.generalInformation;
    newSubject.healthConditions = subjectDto.healthConditions;
    newSubject.functionAbilities = subjectDto.functionAbilities;
    return newSubject;
  }
}

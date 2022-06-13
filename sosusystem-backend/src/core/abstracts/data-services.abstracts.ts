import { IGenericRepository } from './generic-repository.abstracts';
import { Subject } from '../entities';

export abstract class IDataServices {
  abstract subjects: IGenericRepository<Subject>;
}

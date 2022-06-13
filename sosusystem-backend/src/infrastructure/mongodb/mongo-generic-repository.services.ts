import { Model } from 'mongoose';
import { IGenericRepository } from '../../core';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private readonly _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  async findAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind);
  }

  async findOne(id: any): Promise<T> {
    const item = this._repository.findOne({ _id: id });
    item.populate(this._populateOnFind);
    return item;
  }

  async create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  async update(id: string, item: T) {
    return this._repository.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(id: string): Promise<T> {
    return this._repository.findOneAndDelete({ _id: id });
  }
}

export abstract class IGenericRepository<T> {
  abstract findAll(): Promise<T[]>;

  abstract findOne(id: string): Promise<T>;

  abstract create(item: T): Promise<T>;

  abstract update(id: string, item: T): Promise<T>;

  abstract delete(id: string): Promise<T>;
}

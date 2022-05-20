import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto } from './address.dto';

export class CreateSubjectDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: CreateAddressDto;
}

export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {}

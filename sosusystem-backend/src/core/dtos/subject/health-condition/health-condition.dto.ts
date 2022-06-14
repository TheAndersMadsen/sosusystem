import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthConditionItemDto } from './health-condition-item.dto';
import { HealthConditionItem } from '../../../entities';

export class CreateHealthConditionDto {
  title: string;
  healthConditionItems: HealthConditionItem[] = [];
}

export class UpdateHealthConditionDto extends PartialType(
  CreateHealthConditionDto,
) {}

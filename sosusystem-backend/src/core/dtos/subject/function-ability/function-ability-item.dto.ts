import { PartialType } from '@nestjs/mapped-types';

export class CreateFunctionAbilityItemDto {
  subTitle: string;

  currentLevel: number;

  expectedLevel: number;

  note: string;

  execution: number;

  meaningOfExecution: number;

  subjectWish: string;
}

export class UpdateFunctionAbilityItemDto extends PartialType(
  CreateFunctionAbilityItemDto,
) {}

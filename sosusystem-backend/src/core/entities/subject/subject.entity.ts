import { Address } from './address.entity';
import { FunctionAbility } from './function-ability/function-ability.entity';
import { GeneralInformation } from './general-info/general-info.entity';
import { HealthCondition } from './health-condition/health-condition.entity';
import { CreateHealthConditionDto } from '../../dtos';

export class Subject {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  generalInformation: GeneralInformation[];
  healthConditions: CreateHealthConditionDto[];
  functionAbilities: FunctionAbility[];
}
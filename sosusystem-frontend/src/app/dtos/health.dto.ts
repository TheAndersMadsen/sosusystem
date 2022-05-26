import {HealthConditionItemDto} from "./healthconditionitem.dto";

export interface HealthDto{
    title: string;
    healthConditionItems: HealthConditionItemDto[];
}
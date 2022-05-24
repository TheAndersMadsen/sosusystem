import {AddressDto} from "./address.dto";
import {HealthDto} from "./health.dto";
import {GeneralDto} from "./general.dto";
import {FunctionDto} from "./function.dto";


export interface SubjectDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: AddressDto;
    health: HealthDto;
    general: GeneralDto;
    functionD: FunctionDto;
}

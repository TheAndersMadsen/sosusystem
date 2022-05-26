import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {SubjectListDto} from "../dtos/subject-listDto";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SubjectDto} from "../dtos/subject.dto";
import {GeneralDto} from "../dtos/general.dto";
import {HealthDto} from "../dtos/health.dto";
import {HealthConditionItemDto} from "../dtos/healthconditionitem.dto";
import {FunctionDto} from "../dtos/function.dto";
import {FunctionItemDto} from "../dtos/functionitem.dto";


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private _http: HttpClient) { }

  getSubjects(): Observable<SubjectListDto> {
    console.log(this._http.get<SubjectListDto>(environment.api + '/subjects'))
    return this._http.get<SubjectListDto>(environment.api + '/subjects')
  }

  getSubjectById(id: string): Observable<SubjectDto> {
  return this._http.get<SubjectDto>(environment.api + '/subjects/' + id)
  }

  getAllHealth(subjectId : string): Observable<HealthDto>{
    return this._http.get<HealthDto>(environment.api + '/subjects/' + subjectId + '/health-conditions')
  }

  getAllFunction(subjectId: string): Observable<FunctionDto> {
    return this._http.get<FunctionDto>(environment.api + '/subjects/' + subjectId + '/function-abilities')
  }

  getAllHealthItems(subjectId: string, healthId: string) {
    return this._http.get<HealthDto>(environment.api + '/subjects/' + subjectId + '/health-conditions/' + healthId)
  }

  getAllFunctionItems(subjectId: string, functionId: string) {
    return this._http.get<FunctionDto>(environment.api + '/subjects/' + subjectId + '/function-abilities/' + functionId)
  }

  updateSubject(subjectId: string, subjectDto: SubjectDto): Observable<SubjectDto> {
    return this._http.patch<SubjectDto>(environment.api + '/subjects/' + subjectId, subjectDto);
  }

  updateFunctionItem(subjectId: string, faId: string, faItemId: string, functionItemDto: FunctionItemDto ) {
    return this._http.patch(environment.api + '/subjects/' + subjectId + '/function-abilities/' + faId + '/' + faItemId, functionItemDto)
  }

  updateHcItem(subjectId: string, hcId: string, hcItemId: string, healthItemDto: HealthConditionItemDto ) {
    return this._http.patch(environment.api + '/subjects/' + subjectId + '/health-conditions/' + hcId + '/' + hcItemId, healthItemDto)
  }

  updateSubjectGeneralInformation(subjectId: string, generalInformationId: string, generalDto: GeneralDto): Observable<GeneralDto> {
    return this._http.patch<GeneralDto>(environment.api + '/subjects/' + subjectId + '/general-information/' + generalInformationId, generalDto);
  }

}



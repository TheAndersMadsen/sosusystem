import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {SubjectList} from "./subject-list";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SubjectDto} from "./subject.dto";
import {GeneralDto} from "./general.dto";
import {HealthDto} from "./health.dto";


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private _http: HttpClient) { }

  getSubjects(): Observable<SubjectList> {
    console.log(this._http.get<SubjectList>(environment.api + '/subjects'))
    return this._http.get<SubjectList>(environment.api + '/subjects')
  }

  getSubjectById(id: string): Observable<SubjectDto> {
  return this._http.get<SubjectDto>(environment.api + '/subjects/' + id)
  }

  getAllHealth(subjectId : string): Observable<HealthDto>{
    return this._http.get<HealthDto>(environment.api + '/subjects/' + subjectId + '/health-conditions')
  }
  getAllHealthItems(subjectId: string, healthId: string) {
    return this._http.get<HealthDto>(environment.api + '/subjects/' + subjectId + '/health-conditions/' + healthId)
  }

  updateSubject(subjectId: string, subjectDto: SubjectDto): Observable<SubjectDto> {
    return this._http.patch<SubjectDto>(environment.api + '/subjects/' + subjectId, subjectDto);
  }

  updateSubjectGeneralInformation(subjectId: string, generalInformationId: string, generalDto: GeneralDto): Observable<GeneralDto> {
    return this._http.patch<GeneralDto>(environment.api + '/subjects/' + subjectId + '/general-information/' + generalInformationId, generalDto);
  }

}



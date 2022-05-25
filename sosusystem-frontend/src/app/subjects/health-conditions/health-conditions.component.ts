import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../shared/subject.service";
import {ActivatedRoute} from "@angular/router";
import {SubjectDto} from "../shared/subject.dto";
import {HealthDto} from "../shared/health.dto";
import {Observable} from "rxjs";

@Component({
  selector: 'app-health-conditions',
  templateUrl: './health-conditions.component.html',
  styleUrls: ['./health-conditions.component.scss']
})
export class HealthConditionsComponent implements OnInit {

  selectedId: string
  subject : SubjectDto
  health: any
  healthItem: any
  hcId : string
  title: string;

  constructor(private _service: SubjectService, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.selectedId = String(this._route.snapshot.paramMap.get('id'));
    console.log(this.selectedId,'test')
    this._service.getSubjectById(this.selectedId).subscribe((subjectResult) => {
      this.subject = subjectResult
      this._service.getAllHealth(this.selectedId).subscribe((healthResult) => {
        this.health = healthResult

      })
    })
    console.log(this.health)  /// undefined
  }


  onClickItem(hcId : string, title : string) {
    this.hcId = hcId
    this.title = title
    this._service.getAllHealthItems(this.selectedId,this.hcId).subscribe((healthItemResult) => {
      this.healthItem = healthItemResult
    })
    console.log(this.hcId)
    console.log(this.title)


  }



}

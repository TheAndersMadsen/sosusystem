import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../shared/subject.service";
import {ActivatedRoute} from "@angular/router";
import {SubjectDto} from "../shared/subject.dto";
import {HealthDto} from "../shared/health.dto";
import {Observable} from "rxjs";
import {HealthConditionItemDto} from "../shared/healthconditionitem.dto";
import {FormControl, FormGroup} from "@angular/forms";

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
  item : HealthConditionItemDto;
  updateHandler: any;

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


  onClickItem(hcId : string, title : string, item: HealthConditionItemDto) {
    this.hcId = hcId
    this.item = item
    this.title = title
    this._service.getAllHealthItems(this.selectedId,this.hcId).subscribe((healthItemResult) => {
      this.healthItem = healthItemResult

       this.updateHandler = new FormGroup({
        comment: new FormControl(this.healthItem.comment),
        reason: new FormControl(this.healthItem.reason),
        relevant: new FormControl(this.healthItem.relevant)
      })

    })


  }



}

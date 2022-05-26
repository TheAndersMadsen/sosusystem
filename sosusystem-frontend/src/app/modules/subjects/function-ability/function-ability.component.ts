import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../../services/subject.service";
import {ActivatedRoute} from "@angular/router";
import {SubjectDto} from "../../../dtos/subject.dto";
import {HealthConditionItemDto} from "../../../dtos/healthconditionitem.dto";
import {FunctionItemDto} from "../../../dtos/functionitem.dto";

@Component({
  selector: 'app-function-ability',
  templateUrl: './function-ability.component.html',
  styleUrls: ['./function-ability.component.scss']
})
export class FunctionAbilityComponent implements OnInit {

  selectedId: string
  subject : SubjectDto
  function : any
  faId : string
  item : FunctionItemDto
  title : string
  functionItem : any

  constructor(private _service: SubjectService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId = String(this._route.snapshot.paramMap.get('id'));

    this._service.getSubjectById(this.selectedId).subscribe((subjectResult) => {
      this.subject = subjectResult
      this._service.getAllFunction(this.selectedId).subscribe((functionResult) => {
        this.function = functionResult
      })
    })
  }
  onClickItem(faId : string, title : string, item: FunctionItemDto) {
    this.faId = faId
    this.item = item
    this.title = title
    this._service.getAllFunctionItems(this.selectedId,this.faId).subscribe((functionItemResult) => {
      this.functionItem = functionItemResult
    })
  }
}

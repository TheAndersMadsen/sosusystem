import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../shared/subject.service";
import {ActivatedRoute} from "@angular/router";
import {SubjectDto} from "../shared/subject.dto";

@Component({
  selector: 'app-function-ability',
  templateUrl: './function-ability.component.html',
  styleUrls: ['./function-ability.component.scss']
})
export class FunctionAbilityComponent implements OnInit {

  private selectedId: string
  subject : SubjectDto
  function : any

  constructor(private _service: SubjectService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId = String(this._route.snapshot.paramMap.get('id'));
    console.log(this.selectedId,'test')
    this._service.getSubjectById(this.selectedId).subscribe((result) => {
      this.subject = result
      this._service.getAllFunction(this.selectedId).subscribe((functionResult) =>
      this.function = functionResult)
    })
    console.log()  /// undefined
  }



}

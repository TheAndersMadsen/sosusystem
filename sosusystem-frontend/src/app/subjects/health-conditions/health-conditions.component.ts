import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../shared/subject.service";
import {ActivatedRoute} from "@angular/router";
import {SubjectDto} from "../shared/subject.dto";

@Component({
  selector: 'app-health-conditions',
  templateUrl: './health-conditions.component.html',
  styleUrls: ['./health-conditions.component.scss']
})
export class HealthConditionsComponent implements OnInit {

  private selectedId: string
  subject : SubjectDto

  constructor(private _service: SubjectService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId = String(this._route.snapshot.paramMap.get('id'));
    console.log(this.selectedId,'test')
    this._service.getSubjectById(this.selectedId).subscribe((result) => {
      this.subject = result

    })
    console.log()  /// undefined
  }

}

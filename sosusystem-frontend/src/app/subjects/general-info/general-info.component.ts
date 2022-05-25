import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SubjectService} from "../shared/subject.service";
import {ActivatedRoute} from "@angular/router";
import {SubjectDto} from "../shared/subject.dto";
import {GeneralDto} from "../shared/general.dto";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  private selectedId: string
  subject : SubjectDto
  generalDto : GeneralDto

  updateForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormGroup({
      address: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      postCode: new FormControl('', Validators.required)
    }),

  })





  constructor(private _service: SubjectService, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.selectedId = String(this._route.snapshot.paramMap.get('id'));
    console.log(this.selectedId,'test')
    this._service.getSubjectById(this.selectedId).subscribe((result) => {
      this.subject = result
      this.updateForm.patchValue(result)
    })
    console.log(this.updateForm.value)  /// undefined

  }

  clickOnSave(){

    if (this.selectedId) {
      let subject = this.updateForm.value as SubjectDto;
      this._service.updateSubject(this.selectedId,subject).subscribe();
      //this._service.updateSubjectGeneralInformation(this.selectedId,this.subject.general._id,this.generalDto)
    }

  }



}

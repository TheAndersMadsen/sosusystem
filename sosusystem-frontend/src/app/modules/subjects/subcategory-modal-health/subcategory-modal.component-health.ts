import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HealthConditionItemDto} from "../../../dtos/healthconditionitem.dto";
import {FormControl, FormGroup} from "@angular/forms";
import {SubjectService} from "../../../services/subject.service";
import {SubjectDto} from "../../../dtos/subject.dto";


@Component({
  selector: 'app-subcategory-modal-health',
  templateUrl: './subcategory-modal.component-health.html',
  styleUrls: ['./subcategory-modal.component-health.scss']
})
export class SubcategoryModalComponentHealth implements OnInit {

  @Input() hcId : string;
  @Input() title : string;
  @Input() selectedId : string;
  @Input() hcItemId : any;
  @Input() item : HealthConditionItemDto;
  @Input() updateHandler: any

  constructor(private _service : SubjectService) { }

  updateForm = new FormGroup({
    comment: new FormControl(''),
    reason: new FormControl(''),
    relevant: new FormControl('')
  })

  ngOnInit(): void {

  }

clickSave() {

  let item = this.updateForm.value as HealthConditionItemDto;
  this._service.updateHcItem(this.selectedId, this.hcId, this.hcItemId, item)

}
}

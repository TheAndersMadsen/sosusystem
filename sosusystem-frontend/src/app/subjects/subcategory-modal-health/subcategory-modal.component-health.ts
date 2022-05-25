import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HealthConditionItemDto} from "../shared/healthconditionitem.dto";
import {FormControl, FormGroup} from "@angular/forms";
import {SubjectService} from "../shared/subject.service";


@Component({
  selector: 'app-subcategory-modal-health',
  templateUrl: './subcategory-modal.component-health.html',
  styleUrls: ['./subcategory-modal.component-health.scss']
})
export class SubcategoryModalComponentHealth implements OnInit {

  @Input() hcId : string;
  @Input() title : string;
  @Input() selectedId : string;
  @Input() healthItemId : any;
  constructor(private _service : SubjectService) { }

  updateForm = new FormGroup({
    comment: new FormControl(),
    reason: new FormControl(),
    relevant: new FormControl()
  })

  ngOnInit(): void {

  }

clickSave() {
    let hcItem = this.updateForm.value as HealthConditionItemDto;

}
clicktest(){
console.log(this.healthItemId)
}



}

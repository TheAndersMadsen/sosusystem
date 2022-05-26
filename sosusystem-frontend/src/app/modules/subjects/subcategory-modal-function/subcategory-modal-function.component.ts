import {Component, Input, OnInit} from '@angular/core';
import {FunctionItemDto} from "../../../dtos/functionitem.dto";
import {FormControl, FormGroup} from "@angular/forms";
import {HealthConditionItemDto} from "../../../dtos/healthconditionitem.dto";
import {SubjectService} from "../../../services/subject.service";

@Component({
  selector: 'app-subcategory-modal-function',
  templateUrl: './subcategory-modal-function.component.html',
  styleUrls: ['./subcategory-modal-function.component.scss']
})
export class SubcategoryModalFunctionComponent implements OnInit {

  updateForm = new FormGroup({
    note: new FormControl(''),
    execution: new FormControl('')
  })

  @Input() item : FunctionItemDto
  @Input() title : string
  @Input() faId : string
  @Input() selectedId : string;
  constructor(private _service : SubjectService) { }

  ngOnInit(): void {
  }

  clickSave() {

    let item = this.updateForm.value as FunctionItemDto;
    this._service.updateFunctionItem(this.selectedId, this.faId, this.item._id, item).subscribe();

  }
}

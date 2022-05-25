import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-subcategory-modal-health',
  templateUrl: './subcategory-modal.component-health.html',
  styleUrls: ['./subcategory-modal.component-health.scss']
})
export class SubcategoryModalComponentHealth implements OnInit {

  @Input() hcId : string;
  @Input() title : string;
  constructor() { }

  ngOnInit(): void {

  }

testOnClick() {
    console.log(this.hcId  + 'sut pik')
}

}

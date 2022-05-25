import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SubjectDto} from "../shared/subject.dto";
import {Observable} from "rxjs";

@Component({
    selector: 'app-nav-modal',
    templateUrl: './nav-modal.component.html',
    styleUrls: ['./nav-modal.component.scss']
})
export class NavModalComponent implements OnInit {
    @Output() selectedFirstNameEventEmitter = new EventEmitter<string>();
    @Input() selectedFirstName: string;
    @Input() selectedId: string;
    @Input() selectedLastName: string;

    constructor(private _router: Router) {
    }


    ngOnInit(): void {
    }

    onCLickGI(selectedId: string) {
        this._router.navigate(['/general-information', selectedId])
    }

    onCLickHC(selectedId: string) {
        this._router.navigate(['/health-conditions', selectedId])
    }

}

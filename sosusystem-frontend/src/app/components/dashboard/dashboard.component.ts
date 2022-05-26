import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {SubjectListDto} from "../../dtos/subject-listDto";
import {SubjectService} from "../../services/subject.service";
import {SubjectDto} from "../../dtos/subject.dto";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    subjects$: any;
    $error: string | undefined;
    public subjectId: string;
    selectedId: string;
    selectedFirstName: string;
    selectedLastName: string;

    constructor(private _service: SubjectService) {
    }

    ngOnInit(): void {
        this._service.getSubjects().subscribe((result) => {
            this.subjects$ = result
        })
    }

    onSelectedSubject(id: string, firstName: string, lastName: string) {
        console.log(id);
        this.selectedId = id;
        this.selectedFirstName = firstName;
        this.selectedLastName = lastName;
    }

}

import { Component, OnInit, inject } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {

  start_date:NgbDateStruct
  end_date:NgbDateStruct
  constructor() { }

  ngOnInit() {
    
  }

}

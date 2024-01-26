import { Component, OnInit } from '@angular/core';
// import { providerNativeDateAdapter } from '@angular/material/core'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  activities: [] = [];

  constructor() { }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  
  activities: any[]=[];


  constructor() { }

  ngOnInit() {
    this.activities = [
      { name: 'Actividad 1', admin: 'Admin 1', client: 'Cliente 1', date: '2024-01-30' },
      { name: 'Actividad 2', admin: 'Admin 2', client: 'Cliente 2', date: '2024-01-31' },
      // ... más actividades
    ];
  }

}

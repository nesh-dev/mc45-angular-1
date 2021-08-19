import { Component } from '@angular/core';
import { Goal } from './goal';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  students: Student[]
  studentName: string

  constructor(){ 
    this.studentName ="Lawrence"
    this.students = [
      { 
        name: "Lawrence", 
        className: "MC45",
        ipScore: [ 
          { 
            id: 1, 
            ipName: "IP1", 
            score: 90
          }
        ]
      }
    ]
  }
}


/*
-> Asynchronous requests 
-> loading, resolve, reject/error
*/

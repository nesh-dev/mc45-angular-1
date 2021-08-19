import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goalsList: Goal[]

  constructor(
  ) {
    this.goalsList = [
      {
        id: 1,
        name: 'Finding Nemo',
        description: 'Finding Nemo the movie',
        showDescription: false
      },
      {
        id: 2,
        name: 'Get the DOg',
        description: 'Finding Nemo the movie',
        showDescription: false
      },
      {
        id: 3,
        name: 'Solve Math',
        description: 'Finding Nemo the movie',
        showDescription: false
      }
    ]
  }

  ngOnInit() {
  }

  /*
    const myArray = [1, 2,3]
  */

  toggleDetails(index: number) {
    this.goalsList[index].showDescription = !this.goalsList[index].showDescription;
  }

  completeGoal(isComplete:boolean, index:number) {
    if (isComplete) {
      this.goalsList.splice(index, 1);
    }
  }


}

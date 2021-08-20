import { Injectable } from '@angular/core';
import { IGoal } from '../../interface/goal'
import { goalList } from './goalList'

@Injectable({
  providedIn: 'root'
})


export class GoalService {

  constructor() { }

  getGoals():IGoal[] { 
    return goalList
  }
  
}

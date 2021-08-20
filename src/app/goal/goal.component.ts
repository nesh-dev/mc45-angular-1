import { Component, OnInit, Input } from '@angular/core';
import { IGoal } from '../../interface/goal'
import { Quote } from '../quote-calass/quote'
import { GoalService } from '../goal-service/goal.service';
import { HttpClient } from '@angular/common/http';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { GifyServiceService } from '../gify-service.service';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})

export class GoalComponent implements OnInit {
  goalsList: IGoal[];
  quote: Quote;
  gifs: any
  loading: boolean

  constructor(goalService: GoalService,
     private http: HttpClient, 
     private quoteService: QuoteRequestService,
    private gifyServiceService: GifyServiceService
    ) {
    this.goalsList = goalService.getGoals()
  }

  // lifecycle hooks/methods
  ngOnInit() {
    this.quoteService.quoteRequest();
    this.quote = this.quoteService.quote;
    this.getTrendingGifs()
    console.log(this.gifs, 'what are the gifs')
  }
  
  getTrendingGifs(){ 
    this.loading = true;
    this.gifyServiceService.getTrendingGif().subscribe((res) => { 
      this.gifs = res.data
      this.loading = false
    }, 
    error => { 
      this.loading = false
      console.log(error
      )
    }
    )
  }

  toggleDetails(index: number) {
    this.goalsList[index].showDescription = !this.goalsList[index].showDescription;
  }




  // completeGoal(isComplete:boolean, index:number) {
  //   if (isComplete) {
  //     this.goalsList.splice(index, 1);
  //   }
  // }

  // addNewGoal(goal){
  //   let goalLength = this.goalsList.length;
  //   goal.id = goalLength+1;
  //   goal.completeDate = new Date(goal.completeDate)
  //   this.goalsList.push(goal)
  // }


}

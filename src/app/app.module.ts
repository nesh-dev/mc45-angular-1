import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { FormsModule } from '@angular/forms';
import { GoalService } from './goal-service/goal.service';
import { HttpClientModule } from '@angular/common/http'; 
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';


@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [ GoalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

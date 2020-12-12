import { Component } from '@angular/core';
import { Dishes } from '../card-db';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'docker-angular';

  mainCourse = Dishes[0];

  starter = Dishes[3];

  dessert = Dishes[4];

  onRecipeViewed(){
    console.log("recipe is clicked");
  }

}


import { Component, OnInit, Input } from '@angular/core';
import { Dishes } from '../../card-db';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  recipe:Recipe;

  // recipeClicked = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeViewed() {
    console.log("button is clicked");
    // this.recipeClicked.emit(this.recipe);
  }


}

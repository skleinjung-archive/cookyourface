import { Component } from '@angular/core';
import {Recipe} from "./recipe";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'cookyourface-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes.slice(1, 5));
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Recipe} from './recipe';
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private router: Router) {
  }

  title = 'Cook. Your Face.';
  recipes: Recipe[];
  selectedRecipe: Recipe;

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    // this.creatureTypeService.create(name)
    //   .then(creatureType => {
    //     this.creatureTypes.push(creatureType);
    //     this.selectedCreatureType = null;
    //   });
  }

  onSelect(recipe: Recipe): void {
    this.router.navigate(['/recipes', recipe.id])
  }
}


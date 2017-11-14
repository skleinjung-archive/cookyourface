import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {Recipe} from "./recipe";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'creature-type-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  constructor(private RecipeService: RecipeService,
              private route: ActivatedRoute,
              private location: Location
  ) {}

  @Input() recipe: Recipe;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.RecipeService.getRecipe(+params.get('id')))
      .subscribe(recipe => this.recipe = recipe);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.RecipeService.update(this.recipe)
      .then(() => this.goBack());
  }
}


import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from "./app.component";
import {RecipesComponent} from "./recipes.component";
import {RecipeDetailComponent} from "./recipe-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {RecipeService} from "./recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

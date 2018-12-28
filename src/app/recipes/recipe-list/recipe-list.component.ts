import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "RibEye Steak",
      "A delectable medium rare steak",
      "https://www.omahasteaks.com/gifs/990x594/pr_ts004.jpg"
    ),
    new Recipe(
      "Tiramisu",
      "A classic italian desert",
      "https://images-gmi-pmc.edge-generalmills.com/2dc58c2e-3d2d-4797-8866-a21964b55921.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}

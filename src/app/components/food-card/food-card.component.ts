import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { Food } from "src/app/interfaces/food";

@Component({
  selector: "app-food-card",
  templateUrl: "./food-card.component.html",
  styleUrls: ["./food-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodCardComponent implements OnInit {
  @Input() food: Food = {
    avatar: "https://material.angular.io/assets/img/examples/shiba1.jpg",
    description:
      "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
    title: "Shiba Inu",
    subtitle: "Dog Breed",
    image:"https://material.angular.io/assets/img/examples/shiba2.jpg"
  } as Food;

  constructor() {}

  ngOnInit(): void {}
}

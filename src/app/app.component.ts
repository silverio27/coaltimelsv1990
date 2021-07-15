import { Component } from "@angular/core";
import { Food } from "./interfaces/food";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  list: Food[] = [
    {
      title: "Salmão",
      subtitle: "Salmão na prancha de abaxaxi",
      avatar: "assets/profile-pic.jpeg",
      description:
        "Salmão grelhado na prancha de abacaxi, temperado com lemmon pepper e alecrim.",
      image: "assets/foods/salmao.jpeg",
    },
    {
      title: "Frango",
      subtitle: "Bolinho de frango recheado",
      avatar: "assets/profile-pic.jpeg",
      description:
        "Bolinho de frango empanado na batata rufles recheado com bacon e gorgonzola.",
      image: "assets/foods/bolinho.jpeg",
    },
    {
      title: "Macarrão",
      subtitle: "Macarrão com almôndegas",
      avatar: "assets/profile-pic.jpeg",
      description:
        "Macarrão com molho de tomate defumado e almôndegas de patinho tipo medalhão",
      image: "assets/foods/macarrao.jpeg",
    },
    {
      title: "Risoto",
      subtitle: "Risoto de legumes",
      avatar: "assets/profile-pic.jpeg",
      description:
        "Risoto de legumes defumados e bife de ancho grelhado.",
      image: "assets/foods/risoto.jpeg",
    },
    {
      title: "Pulled Pork",
      subtitle: "Pulled Pork",
      avatar: "assets/profile-pic.jpeg",
      description:
        "Sanduiche de costela de porco defumado.",
      image: "assets/foods/pulled.jpeg",
    },
  ];
}

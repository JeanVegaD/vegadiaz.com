import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jean-row-projects',
  templateUrl: './jean-row-projects.component.html',
  styleUrls: ['./jean-row-projects.component.css','../jean-page/jean-page.component.css']
})
export class JeanRowProjectsComponent implements OnInit {

  Projects=[
    {
      nombre:"Carryon",
      descripcion: "CarryOn is a solution that breaks the technological gap between the inhabitants of the province of Limón, offering them a new source of employment focused on the service of order delivery by request. All this managed through a platform that connects carriers with customers through web and mobile applications, generating a unique experience of trust among those involved."
    }
  ]

  constructor() { }

  ngOnInit() {
    $("#img_carryon").mouseover(function () {
      $(this).attr('src', "../../../../assets/img/se_images/logo_carryon.png");
    }).mouseout(function () {
      $(this).attr('src',"../../../../assets/img/se_images/logo_carryon_dark.png");
    });
  }

}

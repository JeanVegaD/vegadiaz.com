import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joanka-certication',
  templateUrl: './joanka-certication.component.html',
  styleUrls: ['./joanka-certication.component.css','../joanka-page/joanka-page.component.css']
})
export class JoankaCerticationComponent implements OnInit {

  certificaciones=[
      {
        nombre:"Executive Specialized in English for Service Centers",
        lugar:"Instituto Nacional de Aprendizaje",
        anno:"2014"
      },
      {
        nombre:"Executive in English for Services",
        lugar:"Instituto Nacional de Aprendizaje",
        anno:"2013"
      }
  ]

  constructor() { }

  ngOnInit() {
  }

}

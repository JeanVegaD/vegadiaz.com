import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joanka-projects',
  templateUrl: './joanka-projects.component.html',
  styleUrls: ['./joanka-projects.component.css', '../joanka-page/joanka-page.component.css']
})
export class JoankaProjectsComponent implements OnInit {

  actividades=[
    {
      nombre:"Iniciativas Verdes",
      descripcion:"The project seeks, through a process of coaching and training, to improve companies and communities' skills according to ecological policies, and encouraging these actors to implement sustainable actions in the interest of improving the conditions of the environment."
    },
    {
      nombre:"Yuquitica",
      descripcion: "Academic innovation project designed to put into practice the knowledge acquired throughout the major, my team created a business plan for an innovative idea that participated in the Expoinnova fair."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

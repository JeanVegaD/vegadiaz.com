import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jean-row-activities',
  templateUrl: './jean-row-activities.component.html',
  styleUrls: ['./jean-row-activities.component.css','../jean-page/jean-page.component.css']
})
export class JeanRowActivitiesComponent implements OnInit {

  actividades=[
    {
      nombre:"Vice President",
      lugar:"Federación de Estudiantes del Instituto Tecnológico de Costa Rica",
      anno:2019
    },
    {
      nombre:"FEITEC Delegate",
      lugar:"Congreso de estudiantes universitarios centroamericanos y del caribe - CEUCA Guatemala",
      anno:2019
    },
    {
      nombre:"Congressman",
      lugar:"IV Institutional Congress - Instituto Tecnológico de Costa Rica",
      anno:2019
    },
    {
      nombre:"Assemblyman",
      lugar:"Representative Institutional Assembly - Instituto Tecnológico de Costa Rica",
      anno:2019
    },
    {
      nombre:"NASA Space Apps Challenge",
      lugar:"Participante",
      anno:2019
    },
    {
      nombre:"Feria de Ideas de Negocios",
      lugar:"Participante",
      anno:2018
    }
    ,{
      nombre:"Tutor",
      lugar:"Programa de tutorías estudiantiles - Departamento de Orienteción y Psicología VIESA",
      anno:2018
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

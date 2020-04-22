import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jean-row-academic-activities',
  templateUrl: './jean-row-academic-activities.component.html',
  styleUrls: ['./jean-row-academic-activities.component.css','../jean-page/jean-page.component.css']
})
export class JeanRowAcademicActivitiesComponent implements OnInit {

  actividades=[
    {
      nombre:"Tutor",
      lugar:"Data structures",
      anno:2020,
      link: "https://www.tec.ac.cr/escuelas/escuela-ingenieria-computacion"
    },
    {
      nombre:"NASA Space Apps Challenge",
      lugar:"Contestant with Orise proyect",
      anno:2019,
      link: "https://www.spaceappschallenge.org/"
    },
    {
      nombre:"Business Ideas Fair",
      lugar:"Contestant with UPlanner proyect",
      anno:2019,
      link: "https://www.tec.ac.cr/tec-emprende-lab"
    },
    {
      nombre:"Course Assistant",
      lugar:"Data structures",
      anno:2017,
      link: "https://www.tec.ac.cr/escuelas/escuela-ingenieria-computacion"
    }
    
  ]


  constructor() { }

  ngOnInit() {
    var certificacion0 = document.getElementById('actividad0');
    certificacion0.onclick = ()=> {
      window.open(this.actividades[0].link);
    };

    var certificacion1 = document.getElementById('actividad1');
    certificacion1.onclick = ()=> {
      window.open(this.actividades[1].link);
    };

    var certificacion1 = document.getElementById('actividad2');
    certificacion1.onclick = ()=> {
      window.open(this.actividades[2].link);
    };

    var certificacion1 = document.getElementById('actividad3');
    certificacion1.onclick = ()=> {
      window.open(this.actividades[3].link);
    };
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joanka-education',
  templateUrl: './joanka-education.component.html',
  styleUrls: ['./joanka-education.component.css','../joanka-page/joanka-page.component.css']
})
export class JoankaEducationComponent implements OnInit {

  educacion=[
    {
      nombre:"Bachelor of Business Management",
      lugar:"Universidad de Costa Rica",
      anno:"2019"
    },
    {
      nombre:"Bachelor of English Language",
      lugar:"Universidad de Costa Rica",
      anno:"2019"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jean-row-about',
  templateUrl: './jean-row-about.component.html',
  styleUrls: ['./jean-row-about.component.css','../jean-page/jean-page.component.css']
})
export class JeanRowAboutComponent implements OnInit {

  info1="I enjoy learning and experimenting with new technologies, especially those that allow me to acquire knowledge in different application areas thanks to working in multidisciplinary teams."
  info2=[
    "Development of web applications with technologies such as Angular and PHP",
    "Design and management of relational and non-relational data bases (SQL, MySQL, MongoDB)",
    "Application of agile development methodologies such as Scrum or Kanbam"
  ]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joanka-phrase',
  templateUrl: './joanka-phrase.component.html',
  styleUrls: ['./joanka-phrase.component.css','../joanka-page/joanka-page.component.css']
})
export class JoankaPhraseComponent implements OnInit {

  frase1="“Without continual growth and progress, such words as improvement, achievement, and success have no meaning.”"
  
  autor1="Benjamin Franklin"

  constructor() { }

  ngOnInit() {
  }

}

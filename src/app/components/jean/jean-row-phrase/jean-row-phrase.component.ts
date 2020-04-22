import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jean-row-phrase',
  templateUrl: './jean-row-phrase.component.html',
  styleUrls: ['./jean-row-phrase.component.css','../jean-page/jean-page.component.css']
})
export class JeanRowPhraseComponent implements OnInit {

  frase1="“I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long. Just figure out what’s next.”"
  autor1="Steve Jobs"

  constructor() { }

  ngOnInit() {
  }

}

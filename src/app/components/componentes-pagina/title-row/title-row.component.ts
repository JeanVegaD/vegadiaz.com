import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-row',
  templateUrl: './title-row.component.html',
  styleUrls: ['./title-row.component.css']
})
export class TitleRowComponent implements OnInit {

  titulo: string = "algoo"

  constructor() { }

  ngOnInit() {
  }

}

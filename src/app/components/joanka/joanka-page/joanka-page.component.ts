import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joanka-page',
  templateUrl: './joanka-page.component.html',
  styleUrls: ['./joanka-page.component.css']
})
export class JoankaPageComponent implements OnInit {


  

  constructor() { }

  ngOnInit() {
    $("#img_inciativas").mouseover(function () {
      $(this).attr('src', "../../../../assets/img/ba_images/logo_iniciativas.png");
    }).mouseout(function () {
      $(this).attr('src',"../../../../assets/img/ba_images/logo_iniciativas_dark.png");
    });

    $("#img_yuquiticas").mouseover(function () {
      $(this).attr('src', "../../../../assets/img/ba_images/logo_yuquitica.png");
    }).mouseout(function () {
      $(this).attr('src',"../../../../assets/img/ba_images/logo_yuquitica_dark.png");
    });

  }

}

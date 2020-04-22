import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jean-banner-principal',
  templateUrl: './jean-banner-principal.component.html',
  styleUrls: ['./jean-banner-principal.component.css','../jean-page/jean-page.component.css']
})
export class JeanBannerPrincipalComponent implements OnInit {


  resumen: string = "currently a computer engineering student at Instituto Tecnológico de Costa Rica"


  constructor() { }

  ngOnInit() {
  }

  
  scrollToSoft(){
    $('html, body').animate({
      scrollTop: $("#div_soft").offset().top
    }, 1000);
  }

  scrolltoActivities(){
    $('html, body').animate({
      scrollTop: $("#div_activities").offset().top
    }, 1000);
  }

  scrollToProjects(){
    $('html, body').animate({
      scrollTop: $("#div_projects").offset().top
    }, 1000);
  }

  scrollToContact(){
    $('html, body').animate({
      scrollTop: $("#div_contact").offset().top
    }, 1000);
  }

}

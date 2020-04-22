import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeSE=false;
  activeBA=false;


  introduccion={
    jean:"I am 21 years old and I am a computer engineering student at the Instituto Tecnologico de Costa Rica. I have a great desire for the design and development of web pages, however I can develop any task that I propose.",
    joanka:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially..."
  }

  constructor(private router: Router) { }

  ngOnInit() {

    jquery(window).resize(function(){
      var width= jquery(window).width();
      if(width<=800){
        jquery("#columnaIzq").css('border-right', 'none');
        jquery("#columnaDer").css('border-left', 'none');
        jquery("#columnaIzq").css('border-bottom', 'solid 3px var(--color-main-light)');
        jquery("#columnaDer").css('border-top', 'solid 3px var(--color-main-light)');
        //jquery("#columnaDer").css('border-left', 'solid 4px var(--color-element1)');
        //jquery("#columnaIzq").css('border-right', 'solid 4px var(--color-element2)');
        //jquery("#columnaDer").css('border-left', 'solid 4px var(--color-element2)');
      }
      else{
        jquery("#columnaIzq").css('border', 'none');
        jquery("#columnaDer").css('border', 'none');
        jquery("#columnaIzq").css('border-right', 'solid 4px var(--color-main-light)');
        jquery("#columnaDer").css('border-left', 'solid 4px var(--color-main-light)');
      }
    });

    jquery('#columnaIzq').mouseenter(()=> {
      var width= jquery(window).width();
      if(width>=800 && !this.activeBA && !this.activeSE){
        jquery("#columnaIzq").css('border-right', 'solid 4px var(--color-element1)');
        jquery("#columnaDer").css('border-left', 'solid 4px var(--color-element1)');
        jquery(".tituloHomeIzq").css('color', 'var(--color-element1)');
      }
     
    });

    jquery('#columnaIzq').mouseleave(()=> {
      var width= jquery(window).width();
      if(width>=800 && !this.activeBA && !this.activeSE){
        jquery("#columnaIzq").css('border-right', 'solid 4px var(--color-main-light)');
        jquery("#columnaDer").css('border-left', 'solid 4px var(--color-main-light)');
        jquery(".tituloHomeIzq").css('color', 'var(--color-main-light)');
      }
      
    });

    /*Columna  Derecha */
    jquery('#columnaDer').mouseenter(()=> {
      var width= jquery(window).width();
      if(width>=800 && !this.activeBA && !this.activeSE){
        jquery("#columnaIzq").css('border-right', 'solid 4px var(--color-element2)');
        jquery("#columnaDer").css('border-left', 'solid 4px var(--color-element2)');
        jquery(".tituloHomeDer").css('color', 'var(--color-element2)');
      }
      
      
    });

    jquery('#columnaDer').mouseleave(()=> {
      var width= jquery(window).width();
      if(width>=800 && !this.activeBA && !this.activeSE){
        jquery("#columnaIzq").css('border-right', 'solid 4px var(--color-main-light)');
        jquery("#columnaDer").css('border-left', 'solid 4px var(--color-main-light)');
        jquery(".tituloHomeDer").css('color', 'var(--color-main-light)');
      }
      
    });


    /*Se realiza clic en la columna izquierda */
    jquery('#div_home_se').click(() =>{
        if(!this.activeSE){
          this.activeSE=true;
          jquery("#div_home_ba").css("display", "none"); 
          jquery("#div_info_se").css("display", "block");
          jquery(".tituloHomeIzq").css('color', 'var(--color-element1)');

          //validar que borde se debe poner
          jquery("#columnaIzq").css('border-right', 'solid 4px var(--color-element1)');
        }
    });

    jquery("#btn_backDerInfo").click(()=>{
      if(this.activeSE){
        this.activeSE=false;
        jquery("#div_info_se").css("display", "none"); 
        jquery("#div_home_ba").css("display", "table-cell");

        //titulo
        jquery(".tituloHomeIzq").css('color', 'var(--color-main-light)');
        //bordes
        jquery("#columnaIzq").css('border-right', 'solid 4px var(--color-main-light)');
        jquery("#columnaDer").css('border-left', 'solid 4px var(--color-main-light)');
      }
        
    });


    /*Se realiza clic en la columna derecha */
    jquery('#div_home_ba').click(() =>{
      if(!this.activeBA){
        this.activeBA=true;
        jquery("#div_home_se").css("display", "none"); 
        jquery("#div_info_ba").css("display", "block");
        jquery(".tituloHomeDer").css('color', 'var(--color-element2)'); 

        //validar que borde se debe poner
        jquery("#columnaDer").css('border-left', 'solid 4px var(--color-element2)');
      }
    });

    jquery("#btn_backIzqInfo").click(()=>{
      if(this.activeBA){
        this.activeBA=false;
        jquery("#div_info_ba").css("display", "none"); 
        jquery("#div_home_se").css("display", "table-cell");

        //titulo
        jquery(".tituloHomeDer").css('color', 'var(--color-main-light)');
        //bordes
        jquery("#columnaIzq").css('border-right', 'solid 4px var(--color-main-light)');
        jquery("#columnaDer").css('border-left', 'solid 4px var(--color-main-light)');
      }
        
    });

  }

  /*redireccionamientos dentre de lass paginas */
  navigateToSeAbout(){
    this.router.navigate(['/se-about']);
  }

}

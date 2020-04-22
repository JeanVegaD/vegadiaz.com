import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jQuery from 'jquery';
import {ApiService} from 'src/app/services/api.service';
import { element } from 'protractor';

@Component({
  selector: 'app-se-resume',
  templateUrl: './se-resume.component.html',
  styleUrls: ['./se-resume.component.css']
})
export class SeResumeComponent implements OnInit {

  summary="Durante mis años de estudio, he trabajado con diferentes tecnologías de programación web "+
  "como HTML, CSS, JavaScript y PHP, ademas de frameworks como Angular, este ultimo utilizado para el desarrollo de este sitio web";

  description="currently a computer engineering student at Instituto Tecnológico de Costa Rica"
  
  frase1="“I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long. Just figure out what’s next.”"
  autor1="Steve Jobs"

  

  educacion=[
    {
      nombre:"Bachelor of software engineering",
      lugar:"Instituto Tecnológico de Costa Rica",
      anno:"2016 - To be finished in 2020"
    },
    {
      nombre:"High school diploma",
      lugar:"Colegio de Limón Diurno",
      anno:"2015"
    }
  ]

  softSkills=[
    "Able to take on and face new challenges, guiding the team to solve the designated problems in a positive and successful way, making the most of resources to provide the best solution.",
    "Ability to work in multidisciplinary teams, increasing efficiency in designated tasks and applying different work methodologies, emphasizing assertive team communication.",
    "Communication is a very important area when solving problems, I consider myself a person capable of listening to all parts of the team and, together with them, proposing solutions and facing problems."]

  certificaciones=[
    {
      nombre:"Scrum Fundamentals Certified",
      lugar:"SCRUMstudy",
      anno:2019
    }
  ];

  actividades=[
    {
      nombre:"Vicepresident",
      lugar:"Federación de Estudiantes del Instituto Tecnológico de Costa Rica",
      anno:2019
    },
    {
      nombre:"FEITEC delegate",
      lugar:"Congreso de estudiantes universitarios centroamericanos y del caribe - CEUCA Guatemala",
      anno:2019
    },
    {
      nombre:"Congressman",
      lugar:"IV Congreso Institucional - Instituto Tecnológico de Costa Rica",
      anno:2019
    },
    {
      nombre:"Assemblyman",
      lugar:"Asamblea Institucional - Instituto Tecnológico de Costa Rica",
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
  Projects=[
    {
      nombre:"Carryon",
      descripcion: "CarryOn is a solution that breaks the technological gap between the inhabitants of the province of Limón, offering them a new source of employment focused on the service of order delivery by request. All this managed through a platform that connects carriers with customers through web and mobile applications, generating a unique experience of trust among those involved."
    }
  ]




  //email data
  e_nombre="";
  e_asunto="";
  e_email="";
  e_mensaje="";

  constructor(private router: Router,private api: ApiService) { }

  ngOnInit() {
    
    $("#img_carryon").mouseover(function () {
      $(this).attr('src', "../../../../assets/img/se_images/logo_carryon.png");
    }).mouseout(function () {
      $(this).attr('src',"../../../../assets/img/se_images/logo_carryon_dark.png");
    });



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



  /*Enviar Correos*/

  mostrarMensajeError(id,mensaje){
    let alert= document.getElementById(id);
    alert.innerHTML=mensaje;
  }

  validarCamposEmail(){
    if(this.e_nombre!="" && this.e_asunto!="" && this.e_email!="" && this.e_mensaje!="" ){
      return true;
    }else{
      return false;
    }
  }


  enviarCorreo(){
    $("#btn_enviar").html('<i class="fas fa-circle-notch fa-spin"></i> sending');
    $("#btn_enviar").attr('disabled', "true");
    if(this.validarCamposEmail()){
      var obj = {
        subject:this.e_asunto,
        message: this.e_mensaje +"\n\n" + "--Remitente " +"\n"+  this.e_nombre + "("+this.e_email+")",
        sendMail:"jean0798@gmail.com"
      }
      this.api.sendEmail(obj).subscribe(
        datos => {
        if(datos['respuesta'] == 'ok') {
          $("#btn_enviar").html('<i class="fab fa-telegram-plane"></i> Submit');
          $("#btn_enviar").attr('disabled', "false");
          this.limpiarValores();
          this.mostrarMensajeError("alertMail",'<div class="alert alert-success" role="alert">Mensaje enviado</div>');
        }
        else{
          $("#btn_enviar").html('<i class="fab fa-telegram-plane"></i> Submit');
          $("#btn_enviar").attr('disabled', "false");
          this.mostrarMensajeError("alertMail",'<div class="alert alert-danger" role="alert">Error con el servidor</div>');
        }
      });
    }
    else{
      $("#btn_enviar").html('<i class="fab fa-telegram-plane"></i> Submit');
      $("#btn_enviar").attr('disabled', "false");
      this.mostrarMensajeError("alertMail",'<div class="alert alert-danger" role="alert">Complete todos los datos</div>');
    }
    
  }


  limpiarValores(){
    this.e_nombre="";
    this.e_asunto="";
    this.e_email="";
    this.e_mensaje="";
  }

    
}

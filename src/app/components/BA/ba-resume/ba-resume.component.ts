import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jQuery from 'jquery';
import {ApiService} from 'src/app/services/api.service';

@Component({
  selector: 'app-ba-resume',
  templateUrl: './ba-resume.component.html',
  styleUrls: ['./ba-resume.component.css']
})
export class BaResumeComponent implements OnInit {

  summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially..."
  
  description="Business administration major currently looking for opportunities to put my skills into practice"
  
  frase1="“Without continual growth and progress, such words as improvement, achievement, and success have no meaning.”"
  
  autor1="Benjamin Franklin"

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

  certificaciones=[
    {
      nombre:"Executive Specialized in English for Service Centers",
      lugar:"Instituto Nacional de Aprendizaje",
      anno:"2014"
    },
    {
      nombre:"Executive in English for Services",
      lugar:"Instituto Nacional de Aprendizaje",
      anno:"2013"
    }
  ];

  jobs=[
    {
      nombre:"Customer Service Representative",
      lugar:"Amazon",
      anno:"Since June 2019",
      tasks:["Answering incoming calls from customers to help with their inquiries and questions, handling complaints and troubleshooting problems.",
        "Identifying customers’ needs, clarifying information, researching and providing solutions.",
        "Providing product and service information to customers."]
    },
    {
      nombre:"Assitant",
      lugar:"Iniciativas Verdes",
      anno:"Since June 2019",
      tasks:["Organizing and scheduling meetings and trainings.",
        "Assisting in the preparation of reports.",
        "Performing other administrative support tasks, including updating and sorting files and drafting correspondence."]
    }
  ];

  actividades=[
    {
      nombre:"Iniciativas Verdes",
      descripcion:"The project seeks, through a process of coaching and training, to improve companies and communities' skills according to ecological policies, and encouraging these actors to implement sustainable actions in the interest of improving the conditions of the environment."
    },
    {
      nombre:"Yuquitica",
      descripcion: "Academic innovation project designed to put into practice the knowledge acquired throughout the major, my team created a business plan for an innovative idea that participated in the Expoinnova fair."
    }
  ]

   //email data
   e_nombre="";
   e_asunto="";
   e_email="";
   e_mensaje="";

  constructor(private router: Router,private api: ApiService) { }

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

  scrolltoEducation(){
    $('html, body').animate({
      scrollTop: $("#div_education").offset().top
    }, 1000);
  }

  scrolltoCertification(){
    $('html, body').animate({
      scrollTop: $("#div_certifications").offset().top
    }, 1000);
  }

  scrolltoJob(){
    $('html, body').animate({
      scrollTop: $("#div_job").offset().top
    }, 1000);
  }

  scrolltoProjects(){
    $('html, body').animate({
      scrollTop: $("#div_projects").offset().top
    }, 1000);
  }

  scrollToContact(){
    $('html, body').animate({
      scrollTop: $("#div_contact").offset().top
    }, 1000);
  }



  /*Correo electronico */

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
        sendMail:"Joanka.vega@gmail.com"
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

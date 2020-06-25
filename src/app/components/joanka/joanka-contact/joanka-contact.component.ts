import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joanka-contact',
  templateUrl: './joanka-contact.component.html',
  styleUrls: ['./joanka-contact.component.css','../joanka-page/joanka-page.component.css']
})
export class JoankaContactComponent implements OnInit {

  
   //email data
  e_nombre="";
  e_asunto="";
  e_email="";
  e_mensaje="";

  constructor(private router: Router,private api: ApiService) { }

  ngOnInit() {
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

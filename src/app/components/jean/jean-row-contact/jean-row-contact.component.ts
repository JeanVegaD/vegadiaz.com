import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import {ApiService} from 'src/app/services/api.service';

@Component({
  selector: 'app-jean-row-contact',
  templateUrl: './jean-row-contact.component.html',
  styleUrls: ['./jean-row-contact.component.css','../jean-page/jean-page.component.css']
})
export class JeanRowContactComponent implements OnInit {

  
  //email data
  e_nombre="";
  e_asunto="";
  e_email="";
  e_mensaje="";

  constructor(private api: ApiService) { }

  ngOnInit() {
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
    jQuery("#btn_enviar").html('<i class="fas fa-circle-notch fa-spin"></i> sending');
    jQuery("#btn_enviar").attr('disabled', "true");
    if(this.validarCamposEmail()){
      var obj = {
        subject:this.e_asunto,
        message: this.e_mensaje +"\n\n" + "--Remitente " +"\n"+  this.e_nombre + "("+this.e_email+")",
        sendMail:"jean0798@gmail.com"
      }
      this.api.sendEmail(obj).subscribe(
        datos => {
        if(datos['respuesta'] == 'ok') {
          jQuery("#btn_enviar").html('<i class="fab fa-telegram-plane"></i> Submit');
          jQuery("#btn_enviar").attr('disabled', "false");
          this.limpiarValores();
          this.mostrarMensajeError("alertMail",'<div class="alert alert-success" role="alert">Mensaje enviado</div>');
        }
        else{
          jQuery("#btn_enviar").html('<i class="fab fa-telegram-plane"></i> Submit');
          jQuery("#btn_enviar").attr('disabled', "false");
          this.mostrarMensajeError("alertMail",'<div class="alert alert-danger" role="alert">Error con el servidor</div>');
        }
      });
    }
    else{
      jQuery("#btn_enviar").html('<i class="fab fa-telegram-plane"></i> Submit');
      jQuery("#btn_enviar").attr('disabled', "false");
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

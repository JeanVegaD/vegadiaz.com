import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfserviceService {

  constructor() { }

  getPDF(id):string{
    if(id==0){
      return "/assets/pdf/Jean_Vega_CV.pdf"
    }
    else if(id==1){
      return "/assets/pdf/Joanka_Vega_CV.pdf"
    }
    else{
      return ""
    }
    
  }
}

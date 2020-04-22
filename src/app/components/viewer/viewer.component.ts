import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PdfserviceService} from "../../services/pdf/pdfservice.service"

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  viewId: string;
  viewDoc= "";
  Titulo="";
  



  constructor(private actRoute: ActivatedRoute,private router: Router, private pdfServ:PdfserviceService) {
    this.viewId = this.actRoute.snapshot.params.id;
   }

  ngOnInit() {
    
    if(this.viewId=="jean_cv"){
      this.Titulo="Curriculum Jean Vega"
      this.viewDoc= this.pdfServ.getPDF(0);
    }
    else if(this.viewId=="joanka_cv" ){
      this.Titulo="Curriculum Joanka Vega"
      this.viewDoc= this.pdfServ.getPDF(1);
    }
    else{
      this.router.navigate(['/not_found']);
    }
  }

}

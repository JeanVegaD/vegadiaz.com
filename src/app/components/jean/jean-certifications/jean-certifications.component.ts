import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jean-certifications',
  templateUrl: './jean-certifications.component.html',
  styleUrls: ['./jean-certifications.component.css','../jean-page/jean-page.component.css']
})
export class JeanCertificationsComponent implements OnInit {


  certificaciones=[
    {
      nombre:"English Certificate (C1 Advanced)",
      lugar:"EF Standard English Test (EF SET)",
      anno:2020,
      link:"https://www.efset.org/cert/pVeYNA"
    },
    {
      nombre:"Scrum Fundamentals Certified",
      lugar:"SCRUMstudy",
      anno:2019,
      link:"https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-JeanVega-723988.pdf"
    }
  ];

  constructor() { }

  ngOnInit() {

    var certificacion0 = document.getElementById('certificacion0');
    certificacion0.onclick = ()=> {
      window.open(this.certificaciones[0].link);
    };

    var certificacion1 = document.getElementById('certificacion1');
    certificacion1.onclick = ()=> {
      window.open(this.certificaciones[1].link);
    };
  }

}

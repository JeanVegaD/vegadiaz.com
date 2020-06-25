import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joanka-jobs',
  templateUrl: './joanka-jobs.component.html',
  styleUrls: ['./joanka-jobs.component.css','../joanka-page/joanka-page.component.css']
})
export class JoankaJobsComponent implements OnInit {
  
  
  
  jobs=[
    {
      nombre:"Resolution specialist",
      lugar:"Amazon",
      anno:"Since April 2020",
      tasks:["Act as a problem solver for all associate and customer escalated issues.",
        "Be an escalation point for customer’s requests. Acting as a bridge between different teams to agree a solution.",
        "Proactively aiding teammates with difficult customer contacts."]
    },
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
  ]

  constructor() { }

  ngOnInit() {
  }

}

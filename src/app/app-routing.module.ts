import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {JeanPageComponent } from './components/jean/jean-page/jean-page.component';
import {BaResumeComponent} from './components/BA/ba-resume/ba-resume.component';

import {NotFoundPageComponent} from './components/config_pages/not-found-page/not-found-page.component';

import{ViewerComponent} from './components/viewer/viewer.component'



const routes: Routes = [
  {path: "",redirectTo: "/joanka", pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'jean',component:JeanPageComponent},
  {path:'joanka',component:BaResumeComponent},
  {path: 'view/:id', component:ViewerComponent},
  {path: 'not_found', component:NotFoundPageComponent},
  {path: '**', component:NotFoundPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

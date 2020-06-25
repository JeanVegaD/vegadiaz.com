import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { DragScrollModule } from 'ngx-drag-scroll';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { NotFoundPageComponent } from './components/config_pages/not-found-page/not-found-page.component';
import { TurnPageComponent } from './components/config_pages/turn-page/turn-page.component';
import { JeanPageComponent } from './components/jean/jean-page/jean-page.component';

import { JeanBannerPrincipalComponent } from './components/jean/jean-banner-principal/jean-banner-principal.component';
import { JeanRowSoftSkilssComponent } from './components/jean/jean-row-soft-skilss/jean-row-soft-skilss.component';
import { JeanRowActivitiesComponent } from './components/jean/jean-row-activities/jean-row-activities.component';
import { JeanRowProjectsComponent } from './components/jean/jean-row-projects/jean-row-projects.component';
import { JeanRowPhraseComponent } from './components/jean/jean-row-phrase/jean-row-phrase.component';
import { JeanRowContactComponent } from './components/jean/jean-row-contact/jean-row-contact.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { SeparetorComponent } from './components/jean/separetor/separetor.component';
import { JeanCertificationsComponent } from './components/jean/jean-certifications/jean-certifications.component';
import { JeanRowAboutComponent } from './components/jean/jean-row-about/jean-row-about.component';
import { JeanRowAcademicActivitiesComponent } from './components/jean/jean-row-academic-activities/jean-row-academic-activities.component';
import { JoankaPageComponent } from './components/joanka/joanka-page/joanka-page.component';
import { JoankaBannerPrincipalComponent } from './components/joanka/joanka-banner-principal/joanka-banner-principal.component';
import { JoankaEducationComponent } from './components/joanka/joanka-education/joanka-education.component';
import { JoankaCerticationComponent } from './components/joanka/joanka-certication/joanka-certication.component';
import { JoankaJobsComponent } from './components/joanka/joanka-jobs/joanka-jobs.component';
import { JoankaProjectsComponent } from './components/joanka/joanka-projects/joanka-projects.component';
import { JoankaPhraseComponent } from './components/joanka/joanka-phrase/joanka-phrase.component';
import { JoankaContactComponent } from './components/joanka/joanka-contact/joanka-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundPageComponent,
    TurnPageComponent,
    JeanPageComponent,
    JeanBannerPrincipalComponent,
    JeanRowSoftSkilssComponent,
    JeanRowActivitiesComponent,
    JeanRowProjectsComponent,
    JeanRowPhraseComponent,
    JeanRowContactComponent,
    ViewerComponent,
    SeparetorComponent,
    JeanCertificationsComponent,
    JeanRowAboutComponent,
    JeanRowAcademicActivitiesComponent,
    JoankaPageComponent,
    JoankaBannerPrincipalComponent,
    JoankaEducationComponent,
    JoankaCerticationComponent,
    JoankaJobsComponent,
    JoankaProjectsComponent,
    JoankaPhraseComponent,
    JoankaContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgwWowModule,
    AppRoutingModule,
    DragScrollModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

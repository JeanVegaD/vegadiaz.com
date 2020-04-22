import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { DragScrollModule } from 'ngx-drag-scroll';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SeResumeComponent } from './components/SE/se-resume/se-resume.component';
import { BaResumeComponent } from './components/BA/ba-resume/ba-resume.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { NotFoundPageComponent } from './components/config_pages/not-found-page/not-found-page.component';
import { TurnPageComponent } from './components/config_pages/turn-page/turn-page.component';
import { TitleRowComponent } from './components/componentes-pagina/title-row/title-row.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeResumeComponent,
    BaResumeComponent,
    NotFoundPageComponent,
    TurnPageComponent,
    TitleRowComponent,
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
    JeanRowAcademicActivitiesComponent
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

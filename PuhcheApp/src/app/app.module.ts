import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MedicoComponent } from './components/registro/medico/medico.component';
import { EmpresaComponent } from './components/registro/empresa/empresa.component';
import { AuxiliarComponent } from './components/registro/auxiliar/auxiliar.component';
import { ArlComponent } from './components/registro/arl/arl.component';
import { EpsComponent } from './components/registro/eps/eps.component';
import { AnamnesisComponent } from './components/paciente/anamnesis/anamnesis.component';
import { IdentificacionComponent } from './components/paciente/identificacion/identificacion.component';
import { ExamenfisicoComponent } from './components/paciente/examenfisico/examenfisico.component';
import { RevisionComponent } from './components/paciente/revision/revision.component';
import { DiagnosticoComponent } from './components/paciente/diagnostico/diagnostico.component';
import { TratamientoComponent } from './components/paciente/tratamiento/tratamiento.component';
import { RecomendacionesComponent } from './components/paciente/recomendaciones/recomendaciones.component';
import { CertificadoComponent } from './components/paciente/certificado/certificado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    MedicoComponent,
    EmpresaComponent,
    AuxiliarComponent,
    ArlComponent,
    EpsComponent,
    AnamnesisComponent,
    IdentificacionComponent,
    ExamenfisicoComponent,
    RevisionComponent,
    DiagnosticoComponent,
    TratamientoComponent,
    RecomendacionesComponent,
    CertificadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

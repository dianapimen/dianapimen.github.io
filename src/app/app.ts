import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeader } from './header/header';
import { WorkExperience } from './work-experience/work-experience';
import { Skills } from './skills/skills';
import { EducationComponent } from './education/education';
import { CertificatesComponent } from './certificates/certificates';
import { Languages } from './languages/languages';
import { Interests } from './interests/interests';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    CommonModule,
    AppHeader,
    WorkExperience, // Agrégalos aquí también
    Skills,
    EducationComponent,
    CertificatesComponent,
    Languages,
    Interests
  ]
})
export class App {
  title = 'cv-diana-style';
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from '../services/education-service/education';
import { Education } from '../models/education/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class EducationComponent implements OnInit {
  public educationList: any[] = [];

  constructor(
    private educationService: EducationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe((data: Education[]) => {
      this.educationList = data.map(item => {
        return {
          ...item,
          // Convertimos los timestamps a formato de fecha legible
          start_date: item.start_date?.toDate().toLocaleDateString('es-ES', { month: 'short', year: 'numeric' }),
          end_date: item.end_date?.toDate().toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })
        };
      });
      this.cdr.detectChanges();
    });
  }
}

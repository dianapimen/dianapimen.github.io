import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // <--- CORRECCIÓN 1: Agregado OnInit
import { CommonModule } from '@angular/common';
import { WorkExperienceService } from '../services/work-experience-service/work-experience';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.html',
  styleUrls: ['./work-experience.css']
})
export class WorkExperience implements OnInit {

  public workList: any[] = [];

  constructor(private workService: WorkExperienceService,
              private cdr: ChangeDetectorRef
             ) {}

  ngOnInit(): void {

    this.workService.getWorkExperience().subscribe((data: any) => {
      this.workList = data;
      console.log("Datos de experiencia:", this.workList);
      this.cdr.detectChanges();
    });
  }
}

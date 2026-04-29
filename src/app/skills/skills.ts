import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../services/skills-service/skills';
import { SkillsDocument, Skill } from '../models/skills/skills.model';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills implements OnInit {
  // Ahora la lista es de tipo Skill[], mucho más profesional
  public skillsList: Skill[] = [];

  constructor(
    private skillsService: SkillsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe((data: SkillsDocument[]) => {
      if (data.length > 0 && data[0].skills) {
        this.skillsList = data[0].skills;
        this.cdr.detectChanges();
      }
    });
  }
}

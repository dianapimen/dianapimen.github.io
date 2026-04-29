import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesService } from '../services/languages-service/languages';
import { Language, LanguagesDocument } from '../models/languages/languages.model';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.html',
  styleUrls: ['./languages.css']
})
export class Languages implements OnInit {
  public languagesList: Language[] = [];

  constructor(
    private languagesService: LanguagesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.languagesService.getLanguages().subscribe((data: LanguagesDocument[]) => {
      if (data.length > 0 && data[0].languages) {
        this.languagesList = data[0].languages;
        this.cdr.detectChanges();
      }
    });
  }
}

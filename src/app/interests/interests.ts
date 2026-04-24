import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestsService } from '../services/interests-service/interests';
import { InterestsDocument } from '../models/interests/interests.model';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.html',
  styleUrls: ['./interests.css']
})
export class Interests implements OnInit {
  public interestsList: string[] = [];

  constructor(
    private interestsService: InterestsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.interestsService.getInterests().subscribe((data: InterestsDocument[]) => {
      if (data.length > 0 && data[0].interest) {
        this.interestsList = data[0].interest;
        this.cdr.detectChanges();
      }
    });
  }
}

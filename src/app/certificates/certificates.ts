import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesService } from '../services/certificates-service/certificates';
import { Certificate } from '../models/certificates/certificates.model';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrls: ['./certificates.css']
})
export class CertificatesComponent implements OnInit {
  public certificatesList: any[] = [];

  constructor(
    private certService: CertificatesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.certService.getCertificates().subscribe((data: Certificate[]) => {
      this.certificatesList = data.map(item => {
        return {
          ...item,
          // Convertimos a "mes año" (ej: abr. 2024)
          date: item.date?.toDate().toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })
        };
      });
      this.cdr.detectChanges();
    });
  }
}

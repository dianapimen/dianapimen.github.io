import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesService } from '../services/certificates-service/certificates';
import { Certificate } from '../models/certificates/certificates.model';

type CertificateViewModel = Certificate & {
  displayTitle?: string;
  displayDate?: string;
  issuerUrl?: string | null;
};

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrls: ['./certificates.css']
})
export class CertificatesComponent implements OnInit {
  public certificatesList: CertificateViewModel[] = [];

  constructor(
    private certService: CertificatesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.certService.getCertificates().subscribe((data: Certificate[]) => {
      this.certificatesList = data.map((item) => this.normalizeCertificate(item));
      this.cdr.detectChanges();
    });
  }

  private normalizeCertificate(item: Certificate): CertificateViewModel {
    return {
      ...item,
      displayTitle: item.title ?? item.name ?? 'Certificado',
      displayDate: this.formatDate(item),
      issuerUrl: this.normalizeIssuerUrl(item.issuer)
    };
  }

  private formatDate(item: Certificate): string {
    if (item.date && typeof item.date.toDate === 'function') {
      return item.date.toDate().toLocaleDateString('es-ES', {
        month: 'short',
        year: 'numeric'
      });
    }

    if (item.date instanceof Date) {
      return item.date.toLocaleDateString('es-ES', {
        month: 'short',
        year: 'numeric'
      });
    }

    if (item.year !== undefined && item.year !== null && item.year !== '') {
      return String(item.year);
    }

    return '';
  }

  private normalizeIssuerUrl(value?: string | null): string | null {
    if (!value) {
      return null;
    }

    const trimmed = value.trim();
    if (!trimmed) {
      return null;
    }

    try {
      const url = new URL(trimmed);
      const isHttp = url.protocol === 'http:' || url.protocol === 'https:';
      return isHttp ? url.toString() : null;
    } catch {
      return null;
    }
  }
}

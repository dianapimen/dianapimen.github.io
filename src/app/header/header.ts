import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // Un solo import para todo
import { Header } from '../models/header/header.model';
import { HeaderService } from '../services/header-service/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class AppHeader implements OnInit {
  header: Header | undefined;

  constructor(
    private headerService: HeaderService,
    private cdr: ChangeDetectorRef // El nombre de la variable está bien
  ) {}

  ngOnInit(): void {
    this.headerService.getHeader().subscribe({
      next: (data) => {
        console.log("--> DATOS RECIBIDOS:", data);
        if (data && data.length > 0) {
          this.header = data[0];

          // CORRECCIÓN AQUÍ: Es detectChanges() sin la "ed"
          this.cdr.detectChanges();

          console.log("--> VARIABLE 'header' ASIGNADA:", this.header);
        }
      },
      error: (err) => console.error("Error de conexión:", err)
    });
  }
}

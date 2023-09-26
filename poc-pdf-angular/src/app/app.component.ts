import { Component, OnInit } from '@angular/core';
import { PdfService } from './services/pdf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poc-pdf-angular';
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  pdf: any;

  constructor(private pdfService: PdfService) {
  }

  ngOnInit(): void {
    this.pdfService.getPDF().subscribe({
      next: value => {
        console.warn(`Deu sucesso: ${value}`);
        this.pdf = value;
      },
      error: err => {
        console.error(`${JSON.stringify(err.error.text)}`);
        const blob: Blob = err.error.text as Blob;
        const url = window.URL.createObjectURL(blob);
        this.pdf = url;
      }
    })
  }

  previewPDF() {

  }
}

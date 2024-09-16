import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';

@Component({
  selector: 'app-solicitantes-expedientes-documentacion',
  standalone: true,
  imports: [HeadingTitleComponent],
  templateUrl: './solicitantes-expedientes-documentacion.component.html',
  styles: ``
})
export default class SolicitantesExpedientesDocumentacionComponent {
  expediente = {
    "id" : "2",
    "nombre" : "Juan Perez",
    "dni" : "12345678",
    numeroExpediente: "A-1234",
    "estado" : "Activo",
  }
  fileName: string = '';
  fileContent: string = '';

  onFileSelected(event: any): void {
    const file: File = event.target.files[0]; // Obtenemos el primer archivo cargado
    
    if (file) {
      this.fileName = file.name; // Obtenemos el nombre del archivo

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.fileContent = e.target.result; // Obtenemos el contenido del archivo
        console.log('Contenido del archivo:', this.fileContent);
      };

      reader.readAsText(file); // Leemos el archivo como texto
    }
  }
}

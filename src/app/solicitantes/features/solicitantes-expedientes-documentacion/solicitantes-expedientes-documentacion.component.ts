import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';

interface Documento {
  nombre: string;
  fecha: string;
}

@Component({
  selector: 'app-solicitantes-expedientes-documentacion',
  standalone: true,
  imports: [HeadingTitleComponent],
  templateUrl: './solicitantes-expedientes-documentacion.component.html',
  styles: ``
})
export default class SolicitantesExpedientesDocumentacionComponent {
  documentos : Documento[];
  constructor() {
    this.documentos = [];
  }
  expediente = {
    "id" : "2",
    "nombre" : "Juan Perez",
    "dni" : "12345678",
    numeroExpediente: "A-1234",
    "estado" : "Activo",
  }
  fileName: string = '';
  fileContent: string = '';





  ngOnInit(){
    const documentos = localStorage.getItem('documentos');
    if (documentos) {
      this.documentos = JSON.parse(documentos);
    }
  }

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
      // Guardar en una lista
      this.documentos.push({nombre: this.fileName, fecha: new Date().toLocaleDateString()});
    }
  }

  onSave() {
    // Guardar en Local Storage todos los documentos
    localStorage.setItem('documentos', JSON.stringify(this.documentos));
    // Alerta
    alert('Documentos guardados correctamente');
  }
}

import {Component, input} from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';
import {Documento} from "../../../shared/interfaces/documentacion.interface";
import {ExpedienteService} from "../../../shared/services/expedientes.services";
import {Observable} from "rxjs";
import {ExpedienteDetail} from "../../../shared/interfaces/expediente.interface";
import {AsyncPipe} from "@angular/common";



@Component({
  selector: 'app-solicitantes-expedientes-documentacion',
  standalone: true,
  imports: [HeadingTitleComponent, AsyncPipe],
  templateUrl: './solicitantes-expedientes-documentacion.component.html',
  styles: ``
})
export default class SolicitantesExpedientesDocumentacionComponent {
  id = input.required<string>();
  public expediente$! : Observable<ExpedienteDetail>;
  documentos : Documento[];
  documentacionEnviada: boolean;

  constructor(private expedienteService:ExpedienteService) {
    this.documentos = [];
    this.documentacionEnviada = false;
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
    this.expediente$ = this.expedienteService.getExpedienteDetail(this.id());
    const documentosSaved = localStorage.getItem('documentos');
    if (documentosSaved) {
      if(JSON.parse(documentosSaved).id == this.id()){
        this.documentos = JSON.parse(documentosSaved).documentos;
        const documentacionEnviada = localStorage.getItem('documentacionEnviada');
        if (documentacionEnviada) {
          this.documentacionEnviada = JSON.parse(documentacionEnviada);
        } else {
          this.documentacionEnviada = false;
        }
      }

    }
  }

  onFileSelected(event: any): void {
    // Verificar que la extension sea pdf, txt, docx o jpg
    const extension = this.fileName.split('.').pop();
    if (extension != 'pdf' && extension != 'txt' && extension != 'docx' && extension != 'jpg') {
      alert('Solo se permiten archivos pdf o txt');
      return;
    }
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
    // Verificar que la extension sea pdf, txt, docx o jpg
    const extension = this.fileName.split('.').pop();
    if (extension != 'pdf' && extension != 'txt' && extension != 'docx' && extension != 'jpg') {
      alert('Solo se permiten archivos pdf o txt');
      return;
    }
    // Guardar en Local Storage todos los documentos
    localStorage.setItem('documentos', JSON.stringify({"id":this.id(),"documentos":this.documentos}));
    // Alerta
    alert('Documentos guardados correctamente');
  }

  onEnviar(){
    // Verificar que la extension sea pdf, txt, docx o jpg
    const extension = this.fileName.split('.').pop();
    if (extension != 'pdf' && extension != 'txt' && extension != 'docx' && extension != 'jpg') {
      alert('Solo se permiten archivos pdf o txt');
      return;
    }
    const response = this.expedienteService.createDocumentacionExpediente(Number(this.id()), this.documentos);
    if(response){
      response.subscribe((data) => {
        // @ts-ignore
        console.log(data["respuesta"]);
        // @ts-ignore
        if(data["respuesta"] == "GRABACION EXITOSA"){
          this.documentacionEnviada = true;
          localStorage.setItem('documentacionEnviada', JSON.stringify(this.documentacionEnviada));
          alert('Documentacion enviada correctamente');
        }
      });

    } else {
      alert('Error al enviar la documentacion');
    }
  }
}

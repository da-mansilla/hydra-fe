import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';

@Component({
  selector: 'app-expediente-new',
  standalone: true,
  imports: [HeadingTitleComponent],
  templateUrl: './expediente-new.component.html',
  styles: ``
})
export default class ExpedienteNewComponent {
  pagina=1;

  avanzarPagina(event: Event){
    event.preventDefault();
    this.pagina++;
  }
  volverPagina(event: Event){
    event.preventDefault();
    this.pagina--;
  }
  crearExpediente(){
    console.log("Expediente creado");
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteDocumentacionComponent } from './expediente-documentacion.component';

describe('ExpedienteDocumentacionComponent', () => {
  let component: ExpedienteDocumentacionComponent;
  let fixture: ComponentFixture<ExpedienteDocumentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedienteDocumentacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedienteDocumentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

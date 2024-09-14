import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitantesExpedientesComponent } from './solicitantes-expedientes.component';

describe('SolicitantesExpedientesComponent', () => {
  let component: SolicitantesExpedientesComponent;
  let fixture: ComponentFixture<SolicitantesExpedientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitantesExpedientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitantesExpedientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
